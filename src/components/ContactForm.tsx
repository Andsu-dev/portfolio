import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  type ContactFormValues,
  contactSchema,
} from "@/schemas/contact.schema";
import { sendContactEmail } from "@/services/email.service";
import { Button } from "./ui/button";

export default function ContactForm() {
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    setLoading(true);
    setSuccess("");
    setError("");
    try {
      await sendContactEmail(data);
      setSuccess("Message sent successfully!");
      setShowForm(false);
      reset();
      setTimeout(() => setSuccess(""), 30000);
    } catch {
      setError("Failed to send message. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mb-6">
      {!showForm ? (
        <Button
          variant="default"
          className="font-mono bg-white/10 cursor-pointer text-lg px-6 py-6"
          onClick={() => setShowForm(true)}
        >
          send_email<span className="text-neutral-500">()</span>;
        </Button>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-4 ">
          <div>
            <input
              type="text"
              placeholder="Your name"
              {...register("name")}
              className="w-full px-4 py-2 rounded-sm bg-neutral-900 text-white border border-neutral-700 focus:outline-none focus:border-white font-mono"
              disabled={loading}
            />
            {errors.name && (
              <p className="text-red-500 text-xs mt-1 font-mono">
                {errors.name.message}
              </p>
            )}
          </div>
          <div>
            <input
              type="text"
              placeholder="Title (ex: Project Proposal)"
              {...register("title")}
              className="w-full px-4 py-2 rounded-sm bg-neutral-900 text-white border border-neutral-700 focus:outline-none focus:border-white font-mono"
              disabled={loading}
            />
            {errors.title && (
              <p className="text-red-500 text-xs mt-1 font-mono">
                {errors.title.message}
              </p>
            )}
          </div>
          <div>
            <input
              type="email"
              placeholder="Your email"
              {...register("email")}
              className="w-full px-4 py-2 rounded-sm bg-neutral-900 text-white border border-neutral-700 focus:outline-none focus:border-white font-mono"
              disabled={loading}
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1 font-mono">
                {errors.email.message}
              </p>
            )}
          </div>
          <div>
            <textarea
              placeholder="Your message"
              {...register("message")}
              className="w-full px-4 py-2 rounded-sm bg-neutral-900 text-white border border-neutral-700 focus:outline-none focus:border-white font-mono min-h-[100px] resize-y"
              disabled={loading}
            />
            {errors.message && (
              <p className="text-red-500 text-xs mt-1 font-mono">
                {errors.message.message}
              </p>
            )}
          </div>
          <div className="flex gap-2">
            <Button
              type="submit"
              className="font-mono bg-white/30 px-6 py-2"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send"}
            </Button>
            <Button
              type="button"
              variant="ghost"
              className="font-mono bg-white/10 px-4 py-2"
              onClick={() => setShowForm(false)}
              disabled={loading}
            >
              Cancel
            </Button>
          </div>
        </form>
      )}
      {success && <p className="text-white mt-2 font-mono">{success}</p>}
      {error && <p className="text-red-500 mt-2 font-mono">{error}</p>}
    </div>
  );
}
