import { useState } from "react";

const ContactUs = () => {
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopied(label);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 via-white to-green-50 px-6 py-12">
      {/* Contact Card */}
      <div className="bg-white shadow-xl rounded-2xl p-10 max-w-2xl w-full text-center transform transition duration-500 hover:scale-[1.02]">
        <h2 className="text-4xl font-bold text-green-800 mb-4 animate-bounce">
          Contact Us
        </h2>
        <p className="text-lg text-gray-700 mb-8">
          We’d love to hear from you. Tap any detail below to copy it instantly.
        </p>

        {/* Contact Details */}
        <div className="space-y-6 text-left">
          <div
            onClick={() =>
              handleCopy(
                "Kwal Village, Bassa LGA, Plateau State, Nigeria",
                "Address"
              )
            }
            className="cursor-pointer p-3 rounded-lg bg-green-50 hover:bg-green-100 transition"
          >
            <p className="text-gray-900 text-lg">
              <span className="font-semibold">Address:</span> Kwal Village, Bassa
              LGA, Plateau State, Nigeria
            </p>
            {copied === "Address" && (
              <span className="text-green-600 text-sm">📋 Copied!</span>
            )}
          </div>

          <div
            onClick={() =>
              handleCopy(
                "+2348145517222, +2349042614572",
                "Phone"
              )
            }
            className="cursor-pointer p-3 rounded-lg bg-green-50 hover:bg-green-100 transition"
          >
            <p className="text-gray-900 text-lg">
              <span className="font-semibold">Phone:</span> +234 814 551 7222, +234
              904 261 4572
            </p>
            {copied === "Phone" && (
              <span className="text-green-600 text-sm">📋 Copied!</span>
            )}
          </div>

          <div
            onClick={() =>
              handleCopy(
                "noachhelpinghandsfoundation@gmail.com",
                "Email"
              )
            }
            className="cursor-pointer p-3 rounded-lg bg-green-50 hover:bg-green-100 transition"
          >
            <p className="text-gray-900 text-lg">
              <span className="font-semibold">Email:</span>{" "}
              noachhelpinghandsfoundation@gmail.com
            </p>
            {copied === "Email" && (
              <span className="text-green-600 text-sm">📋 Copied!</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
