import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

interface FAQItem {
  category: string;
  question: string;
  answer: string;
}

export default function FAQ() {
  const [searchQuery, setSearchQuery] = useState("");

  // Example FAQ items
  const faqs: FAQItem[] = [
    {
      category: "Application",
      question: "How do I apply for a National ID?",
      answer:
        "Go to the 'National ID' section, click 'Apply', fill the form, and submit. You can track your application in your dashboard.",
    },
    {
      category: "Application",
      question: "How do I register for Health Insurance?",
      answer:
        "Go to the 'Health Insurance' section, click 'Apply', fill the required information, and submit the form. Your status will appear in your dashboard.",
    },
    {
      category: "Application",
      question: "How do I register a business?",
      answer:
        "Go to the 'Business Registration' section, complete the form, and submit. You will receive legal documentation once approved by RDB.",
    },
    {
      category: "Account",
      question: "How do I edit my profile or change password?",
      answer:
        "Visit your Profile page to update your full name, email, or password. Always log out securely after changes.",
    },
    {
      category: "Account",
      question: "Why can't I access Dashboard or Profile?",
      answer:
        "Protected pages require login. Make sure you are logged in; otherwise, you will be redirected to home or login page.",
    },
    {
      category: "Technical",
      question: "My application status is not updating",
      answer:
        "Application status updates sequentially. Please wait for notifications or check the dashboard.",
    },
    {
      category: "Technical",
      question: "I logged out accidentally",
      answer: "Simply log in again using your email and password.",
    },
  ];

  // Filter FAQs by search query
  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  // Get unique categories
  const categories = Array.from(new Set(faqs.map((f) => f.category)));

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* HERO */}
        <section className="relative bg-gradient-to-br from-primary to-secondary text-white py-20">
          <div className="section-container relative z-10">
            <div className="max-w-3xl space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-1 text-sm font-medium">
                ❓ FAQ
              </span>

              <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
                Frequently Asked Questions
              </h1>

              <p className="text-lg text-white/90">
                Find answers to common questions about GovConnect services,
                accounts, and technical issues.
              </p>
            </div>
          </div>
          <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-white/20 blur-3xl" />
        </section>

        {/* CONTENT */}
        <section className="section-container py-16 space-y-12">
          {/* Search */}
          <div className="card-elevated p-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              🔍 Search FAQ
            </h2>
            <input
              type="text"
              placeholder="Type a question or keyword..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="input-field w-full"
            />
          </div>

          {/* FAQ Categories */}
          {categories.map((category) => (
            <div key={category} className="card-elevated p-8 space-y-4">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                {category}
              </h2>

              {filteredFaqs
                .filter((faq) => faq.category === category)
                .map((faq, idx) => (
                  <details
                    key={idx}
                    className="border border-border rounded-lg p-4 cursor-pointer open:bg-primary/5 transition"
                  >
                    <summary className="font-semibold text-lg text-foreground">
                      {faq.question}
                    </summary>
                    <p className="mt-2 text-muted-foreground">{faq.answer}</p>
                  </details>
                ))}

              {filteredFaqs.filter((faq) => faq.category === category)
                .length === 0 && (
                <p className="text-muted-foreground">
                  No FAQs match your search.
                </p>
              )}
            </div>
          ))}
        </section>
      </main>

      <Footer />
    </div>
  );
}
