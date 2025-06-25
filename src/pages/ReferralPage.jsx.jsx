import React, { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";

const getBaseUrl = () => window.location.origin;

export default function ReferralPage({ user }) {
  const [referralCode, setReferralCode] = useState("");
  const [copied, setCopied] = useState(false);
  const [referralCount, setReferralCount] = useState(0);
  const [reward, setReward] = useState(0);

  // Fetch or generate referral code for the user
  useEffect(() => {
    if (!user) return;
    const fetchReferral = async () => {
      // Assume you have a 'referrals' table with user_id and code
      let { data, error } = await supabase
        .from("referrals")
        .select("code")
        .eq("user_id", user.id)
        .single();

      if (!data) {
        // Generate a new code if not exists
        const code = user.id.slice(0, 8) + Math.random().toString(36).substring(2, 6);
        await supabase.from("referrals").insert([{ user_id: user.id, code }]);
        setReferralCode(code);
      } else {
        setReferralCode(data.code);
      }
    };
    fetchReferral();
  }, [user]);

  // Fetch referral stats
  useEffect(() => {
    if (!user) return;
    const fetchStats = async () => {
      // Assume you track successful referrals in 'referral_events'
      let { count } = await supabase
        .from("referral_events")
        .select("*", { count: "exact", head: true })
        .eq("referrer_id", user.id);
      setReferralCount(count || 0);
      setReward((count || 0) * 100); // Example: 100 points per referral
    };
    fetchStats();
  }, [user]);

  const referralLink = `${getBaseUrl()}/signup?ref=${referralCode}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(referralLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-lg mx-auto bg-white rounded-xl shadow-md p-8 mt-10">
      <h2 className="text-2xl font-bold mb-4 text-blue-900">Refer & Earn</h2>
      <p className="mb-4 text-gray-700">
        Invite your friends to BebaSafe! For every friend who signs up and completes their first order, you earn <span className="font-bold text-green-600">100 points</span>.
      </p>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">Your Referral Link</label>
        <div className="flex">
          <input
            type="text"
            value={referralLink}
            readOnly
            className="flex-1 px-3 py-2 border rounded-l-md"
          />
          <button
            onClick={handleCopy}
            className="px-4 bg-blue-600 text-white rounded-r-md hover:bg-blue-700"
          >
            {copied ? "Copied!" : "Copy"}
          </button>
        </div>
      </div>
      <div className="mb-6">
        <span className="block text-gray-700">
          <b>{referralCount}</b> successful referrals
        </span>
        <span className="block text-gray-700">
          <b>{reward}</b> reward points earned
        </span>
      </div>
      <div className="flex gap-2">
        <a
          href={`https://wa.me/?text=Join%20BebaSafe!%20Sign%20up%20here:%20${encodeURIComponent(referralLink)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Share on WhatsApp
        </a>
        <a
          href={`sms:?body=Join BebaSafe! Sign up here: ${referralLink}`}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Share via SMS
        </a>
      </div>
    </div>
  );
}