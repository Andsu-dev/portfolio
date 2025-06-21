import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useTheme } from "../contexts/ThemeContext";
import {
  type ContactFormValues,
  contactSchema,
} from "../schemas/contact.schema";
import { sendContactEmail } from "../services/email.service";
import { Button } from "./ui/button";

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const { theme } = useTheme();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      await sendContactEmail(data);
      setSubmitStatus("success");
      reset();
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="name"
            className={`block text-sm font-medium mb-2 ${
              theme === "dark" ? "text-white" : "text-black"
            }`}
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            {...register("name")}
            className={`w-full px-4 py-3 rounded-md border transition-colors duration-200 ${
              theme === "dark"
                ? "bg-neutral-900 border-neutral-700 text-white placeholder-neutral-500 focus:border-neutral-500 focus:outline-none"
                : "bg-white border-neutral-300 text-black placeholder-neutral-500 focus:border-neutral-500 focus:outline-none"
            }`}
            placeholder="Your full name"
            disabled={isSubmitting}
          />
          {errors.name && (
            <p
              className={`text-xs mt-1 ${
                theme === "dark" ? "text-red-400" : "text-red-600"
              }`}
            >
              {errors.name.message}
            </p>
          )}
        </div>

        <div className="w-full flex flex-col">
          <label
            htmlFor="email"
            className={`block text-sm font-medium mb-2 ${
              theme === "dark" ? "text-white" : "text-black"
            }`}
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            {...register("email")}
            className={`w-full px-4 py-3 rounded-md border transition-colors duration-200 ${
              theme === "dark"
                ? "bg-neutral-900 border-neutral-700 text-white placeholder-neutral-500 focus:border-neutral-500 focus:outline-none"
                : "bg-white border-neutral-300 text-black placeholder-neutral-500 focus:border-neutral-500 focus:outline-none"
            }`}
            placeholder="your@email.com"
            disabled={isSubmitting}
          />
          {errors.email && (
            <p
              className={`text-xs mt-1 ${
                theme === "dark" ? "text-red-400" : "text-red-600"
              }`}
            >
              {errors.email.message}
            </p>
          )}
        </div>
      </div>

      <div>
        <label
          htmlFor="title"
          className={`block text-sm font-medium mb-2 ${
            theme === "dark" ? "text-white" : "text-black"
          }`}
        >
          Subject
        </label>
        <input
          type="text"
          id="title"
          {...register("title")}
          className={`w-full px-4 py-3 rounded-md border transition-colors duration-200 ${
            theme === "dark"
              ? "bg-neutral-900 border-neutral-700 text-white placeholder-neutral-500 focus:border-neutral-500 focus:outline-none"
              : "bg-white border-neutral-300 text-black placeholder-neutral-500 focus:border-neutral-500 focus:outline-none"
          }`}
          placeholder="Ex: Project Proposal"
          disabled={isSubmitting}
        />
        {errors.title && (
          <p
            className={`text-xs mt-1 ${
              theme === "dark" ? "text-red-400" : "text-red-600"
            }`}
          >
            {errors.title.message}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="message"
          className={`block text-sm font-medium mb-2 ${
            theme === "dark" ? "text-white" : "text-black"
          }`}
        >
          Message
        </label>
        <textarea
          id="message"
          {...register("message")}
          rows={6}
          className={`w-full px-4 py-3 rounded-md border transition-colors duration-200 resize-none ${
            theme === "dark"
              ? "bg-neutral-900 border-neutral-700 text-white placeholder-neutral-500 focus:border-neutral-500 focus:outline-none"
              : "bg-white border-neutral-300 text-black placeholder-neutral-500 focus:border-neutral-500 focus:outline-none"
          }`}
          placeholder="Tell me about your project or opportunity..."
          disabled={isSubmitting}
        />
        {errors.message && (
          <p
            className={`text-xs mt-1 ${
              theme === "dark" ? "text-red-400" : "text-red-600"
            }`}
          >
            {errors.message.message}
          </p>
        )}
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className={`w-full font-mono px-6 py-3 text-base transition ${
          theme === "dark"
            ? "bg-white/10 text-white hover:bg-white/20 disabled:bg-neutral-800 disabled:text-neutral-600"
            : "bg-black/10 text-black hover:bg-black/20 disabled:bg-neutral-300 disabled:text-neutral-600"
        }`}
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>

      {submitStatus === "success" && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`text-center text-sm ${
            theme === "dark" ? "text-green-400" : "text-green-600"
          }`}
        >
          Message sent successfully! I'll get back to you soon.
        </motion.p>
      )}
      {submitStatus === "error" && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`text-center text-sm ${
            theme === "dark" ? "text-red-400" : "text-red-600"
          }`}
        >
          Error sending message. Please try again or contact me directly.
        </motion.p>
      )}
    </motion.form>
  );
};

export default ContactForm;
