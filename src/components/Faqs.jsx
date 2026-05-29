import { useEffect, useState, useRef } from "react";

export const Faqs = () => {
  const [faqs, setFaqs] = useState([]);
  const [activeFaq, setActiveFaq] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const topRef = useRef(null);

  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        const response = await fetch("/db.json");
        const data = await response.json();

        const faqData = data.faqs || [];

        setFaqs(faqData);
        setActiveFaq(faqData.length > 0 ? faqData[0] : null);
      } catch (err) {
        console.error("Error fetching FAQs:", err);
        setError("Failed to load FAQs");
      } finally {
        setLoading(false);
      }
    };

    fetchFaqs();
  }, []);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");

    const handleScroll = () => {
      if (mq.matches && activeFaq) {
        topRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    };

    handleScroll();

    mq.addEventListener("change", handleScroll);

    return () => mq.removeEventListener("change", handleScroll);
  }, [activeFaq]);

  const handleFaqClick = (faq) => {
    setActiveFaq((prev) => (prev?.id === faq.id ? prev : faq));
  };

  if (loading) {
    return (
      <div className="w-full px-4 py-10 text-gray-500">Loading FAQs...</div>
    );
  }

  if (error) {
    return <div className="w-full px-4 py-10 text-red-500">{error}</div>;
  }

  return (
    <div className="w-full min-h-96">
      <h2 className="text-5xl font-semibold my-10">FAQs</h2>

      <div className="w-full flex flex-col md:flex-row justify-between py-5 gap-10">
        {/* LEFT SIDE - ACTIVE FAQ */}
        <div ref={topRef} className="w-full md:w-2/5">
          {activeFaq ? (
            <div>
              <h3 className="text-2xl font-bold mb-10 text-green-500/70 underline underline-offset-4">
                {activeFaq.question}
              </h3>
              <p className="text-black/60 font-medium leading-relaxed">
                {activeFaq.answer}
              </p>
            </div>
          ) : (
            <p className="text-gray-400">No FAQ selected</p>
          )}
        </div>

        {/* RIGHT SIDE - QUESTIONS LIST */}
        <div className="w-full md:w-2/5 flex flex-col gap-4">
          {faqs.map((faq) => (
            <button
              key={faq.id}
              type="button"
              onClick={() => handleFaqClick(faq)}
              className={`
                text-left w-full font-semibold transition-all duration-300
                cursor-pointer xl:mb-4 py-2 px-2 rounded-md
                hover:underline underline-offset-4
                active:scale-[0.98]
                ${
                  activeFaq?.id === faq.id
                    ? "text-green-600"
                    : "text-purple-900"
                }
              `}
            >
              {faq.question}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
