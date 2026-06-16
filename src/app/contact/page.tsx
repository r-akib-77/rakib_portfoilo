"use client";

import { useEditor, EditorContent } from "@tiptap/react";

import StarterKit from "@tiptap/starter-kit";

import Placeholder from "@tiptap/extension-placeholder";

import Underline from "@tiptap/extension-underline";

import { motion } from "framer-motion";

import {
  Mail,
  Send,
  Sparkles,
  User,
  MessageSquare,
  Bold,
  Italic,
  UnderlineIcon,
  List,
  ListOrdered,
  Heading1,
  Heading2,
  Phone,
} from "lucide-react";

import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa";
import { useState } from "react";
import toast from "react-hot-toast";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validation
    if (!name.trim()) {
      toast.error("Please enter your name");
      return;
    }

    if (!email.trim()) {
      toast.error("Please enter your email");
      return;
    }

    if (!editor?.getText().trim()) {
      toast.error("Please enter a message");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("https://formspree.io/f/xbdebzbv", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message: editor?.getHTML() || "",
        }),
      });

      if (response.ok) {
        toast.success("Message sent successfully!");

        setName("");
        setEmail("");
        editor?.commands.clearContent();
      } else {
        toast.error("Failed to send message.");
      }
    } catch (error) {
      toast.error("Network error.");
    } finally {
      setLoading(false);
    }
  };
  const editor = useEditor({
    extensions: [
      StarterKit,

      Underline,

      Placeholder.configure({
        placeholder:
          "Write your message here... startup idea, frontend project, SaaS platform, automation workflow, collaboration, or anything creative.",
      }),
    ],

    content: "",

    editorProps: {
      attributes: {
        class:
          "min-h-[180px] sm:min-h-[220px] outline-none text-sm text-zinc-300 leading-relaxed",
      },
    },

    immediatelyRender: false,
  });

  const toolbarButtons = [
    {
      icon: Bold,
      action: () => editor?.chain().focus().toggleBold().run(),
    },

    {
      icon: Italic,
      action: () => editor?.chain().focus().toggleItalic().run(),
    },

    {
      icon: UnderlineIcon,
      action: () => editor?.chain().focus().toggleUnderline().run(),
    },

    {
      icon: Heading1,
      action: () => editor?.chain().focus().toggleHeading({ level: 1 }).run(),
    },

    {
      icon: Heading2,
      action: () => editor?.chain().focus().toggleHeading({ level: 2 }).run(),
    },

    {
      icon: List,
      action: () => editor?.chain().focus().toggleBulletList().run(),
    },

    {
      icon: ListOrdered,
      action: () => editor?.chain().focus().toggleOrderedList().run(),
    },
  ];

  const socials = [
    {
      icon: FaGithub,
      link: "https://github.com/r-akib-77?tab=repositories",
    },

    {
      icon: FaLinkedinIn,
      link: "https://www.linkedin.com/in/rakibul-hasan-517b192a7",
    },
    {
      icon: FaInstagram,
      link: "https://www.instagram.com/r_akib_77/",
    },
    {
      icon: FaFacebookF,
      link: "https://www.facebook.com/share/1CRHimXxNu/",
    },
  ];

  return (
    <main
      className="
        relative
        overflow-hidden
        bg-[#05010A]
        px-4
        py-14
        sm:px-6
        md:px-8
        pt-32
        md:pt-40
        lg:px-12
      "
    >
      {/* GRID */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.03]
          [background-image:linear-gradient(rgba(255,255,255,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.2)_1px,transparent_1px)]
          [background-size:40px_40px]
        "
      />

      {/* GLOW */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[320px]
          w-[320px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-purple-700/10
          blur-[100px]
          sm:h-[500px]
          sm:w-[500px]
          sm:blur-[120px]
        "
      />

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-6xl
        "
      >
        {/* LABEL */}
        <motion.div
          initial={{
            opacity: 0,
            y: 10,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          className="
            mx-auto
            mb-4
            flex
            w-fit
            items-center
            gap-2
            rounded-full
            border
            border-white/10
            bg-white/[0.03]
            px-4
            py-2
            backdrop-blur-xl
          "
        >
          <Sparkles
            size={10}
            className="
              text-fuchsia-400
            "
          />

          <span
            className="
              text-[9px]
              tracking-[0.25em]
              text-zinc-400
              sm:text-[10px]
            "
          >
            CONTACT
          </span>
        </motion.div>

        {/* TITLE */}
        <motion.h1
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          className="
            text-center
            font-[family-name:var(--font-space)]
            text-3xl
            font-black
            tracking-tight
            text-white
            sm:text-5xl
            md:text-6xl
          "
        >
          Let’s Build
          <span
            className="
              bg-gradient-to-r
              from-fuchsia-300
              via-purple-400
              to-cyan-400
              bg-clip-text
              text-transparent
            "
          >
            {" "}
            Something Great
          </span>
        </motion.h1>

        {/* DESC */}
        <motion.p
          initial={{
            opacity: 0,
            y: 15,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.1,
          }}
          className="
            mx-auto
            mt-4
            max-w-2xl
            text-center
            text-[13px]
            leading-relaxed
            text-zinc-400
            sm:text-base
          "
        >
          Open for freelance work, SaaS products, frontend development,
          automation systems, and startup collaborations.
        </motion.p>

        {/* CONTACT CARD */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.15,
          }}
          className="
            relative
            mx-auto
            mt-10
            overflow-hidden
            rounded-[26px]
            border
            border-white/10
            bg-white/[0.03]
            backdrop-blur-2xl
            sm:rounded-[32px]
          "
        >
          {/* BG */}
          <div
            className="
              absolute
              inset-0
              bg-gradient-to-br
              from-purple-500/10
              via-fuchsia-500/5
              to-cyan-500/10
            "
          />

          <div
            className="
              relative
              z-10
              grid
              gap-6
              p-4
              sm:gap-8
              sm:p-6
              md:grid-cols-[0.9fr_1.1fr]
              md:p-8
            "
          >
            {/* LEFT */}
            <div
              className="
                rounded-[22px]
                border
                border-white/10
                bg-black/20
                p-4
                sm:rounded-[28px]
                sm:p-7
              "
            >
              <p
                className="
                  text-[9px]
                  tracking-[0.25em]
                  text-zinc-500
                  sm:text-[10px]
                "
              >
                CONTACT INFO
              </p>

              <h2
                className="
                  mt-4
                  text-2xl
                  font-black
                  leading-tight
                  text-white
                  sm:text-3xl
                "
              >
                Let’s discuss your next
                <span
                  className="
                    bg-gradient-to-r
                    from-fuchsia-300
                    via-purple-400
                    to-cyan-400
                    bg-clip-text
                    text-transparent
                  "
                >
                  {" "}
                  project
                </span>
              </h2>

              {/* EMAIL & PHONE */}
              <div
                className="
                  mt-6
                  space-y-3
                  sm:space-y-4
                "
              >
                {/* EMAIL */}
                <div
                  className="
                    flex
                    items-center
                    gap-3
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/[0.03]
                    p-3
                    sm:gap-4
                    sm:p-4
                  "
                >
                  <div
                    className="
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-2xl
                      bg-gradient-to-br
                      from-fuchsia-500
                      to-purple-500
                      sm:h-12
                      sm:w-12
                    "
                  >
                    <Mail
                      size={18}
                      className="
                        text-white
                      "
                    />
                  </div>

                  <div className="min-w-0">
                    <p
                      className="
                        text-[10px]
                        tracking-[0.2em]
                        text-zinc-500
                      "
                    >
                      EMAIL
                    </p>

                    <h3
                      className="
                        mt-1
                        break-all
                        text-[12px]
                        font-medium
                        text-white
                        sm:text-sm
                      "
                    >
                      rakibulhasanrakib2004@gmail.com
                    </h3>
                  </div>
                </div>

                {/* PHONE */}
                <div
                  className="
                    flex
                    items-center
                    gap-3
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/[0.03]
                    p-3
                    sm:gap-4
                    sm:p-4
                  "
                >
                  <div
                    className="
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-2xl
                      bg-gradient-to-br
                      from-cyan-500
                      to-blue-500
                      sm:h-12
                      sm:w-12
                    "
                  >
                    <Phone
                      size={18}
                      className="
                        text-white
                      "
                    />
                  </div>

                  <div>
                    <p
                      className="
                        text-[10px]
                        tracking-[0.2em]
                        text-zinc-500
                      "
                    >
                      PHONE
                    </p>

                    <h3
                      className="
                        mt-1
                        text-[13px]
                        font-medium
                        text-white
                        sm:text-sm
                      "
                    >
                      01646774173
                    </h3>
                  </div>
                </div>
              </div>

              {/* SOCIALS */}
              <div
                className="
                  mt-6
                  sm:mt-8
                "
              >
                <p
                  className="
                    mb-3
                    text-[10px]
                    tracking-[0.2em]
                    text-zinc-500
                    sm:mb-4
                    sm:text-xs
                  "
                >
                  SOCIAL LINKS
                </p>

                <div
                  className="
                    flex
                    flex-wrap
                    gap-2
                    sm:gap-3
                  "
                >
                  {socials.map((item, index) => {
                    const Icon = item.icon;

                    return (
                      <motion.a
                        key={index}
                        whileHover={{
                          y: -4,
                        }}
                        href={item.link}
                        target="_blank"
                        className="
                          flex
                          h-11
                          w-11
                          items-center
                          justify-center
                          rounded-2xl
                          border
                          border-white/10
                          bg-white/[0.03]
                          text-zinc-300
                          transition-all
                          duration-300
                          hover:border-purple-500/20
                          hover:bg-purple-500/10
                          hover:text-white
                          sm:h-12
                          sm:w-12
                        "
                      >
                        <Icon size={16} />
                      </motion.a>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div>
              <form
                onSubmit={submitForm}
                className="
                  grid
                  gap-3
                  sm:gap-4
                "
              >
                {/* NAME */}
                <div className="relative">
                  <User
                    size={17}
                    className="
                      absolute
                      left-4
                      top-1/2
                      -translate-y-1/2
                      text-zinc-500
                    "
                  />

                  <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your Name"
                    className="
                      h-13
                      w-full
                      rounded-2xl
                      border
                      border-white/10
                      bg-white/[0.03]
                      pl-11
                      pr-4
                      text-sm
                      text-white
                      outline-none
                      placeholder:text-zinc-500
                      focus:border-purple-500/30
                      sm:h-14
                      sm:pl-12
                    "
                  />
                </div>

                {/* EMAIL */}
                <div className="relative">
                  <Mail
                    size={17}
                    className="
                      absolute
                      left-4
                      top-1/2
                      -translate-y-1/2
                      text-zinc-500
                    "
                  />

                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your Email"
                    className="
                      h-13
                      w-full
                      rounded-2xl
                      border
                      border-white/10
                      bg-white/[0.03]
                      pl-11
                      pr-4
                      text-sm
                      text-white
                      outline-none
                      placeholder:text-zinc-500
                      focus:border-purple-500/30
                      sm:h-14
                      sm:pl-12
                    "
                  />
                </div>

                {/* EDITOR */}
                <div
                  className="
                    overflow-hidden
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/[0.03]
                  "
                >
                  {/* TOOLBAR */}
                  <div
                    className="
                      flex
                      flex-wrap
                      items-center
                      gap-2
                      border-b
                      border-white/10
                      p-2
                      sm:p-3
                    "
                  >
                    {toolbarButtons.map((btn, index) => {
                      const Icon = btn.icon;

                      return (
                        <button
                          key={index}
                          type="button"
                          onClick={btn.action}
                          className="
                            flex
                            h-8
                            w-8
                            items-center
                            justify-center
                            rounded-xl
                            border
                            border-white/10
                            bg-black/20
                            text-white
                            transition-all
                            duration-300
                            hover:border-purple-500/20
                            hover:bg-purple-500/10
                            sm:h-9
                            sm:w-9
                          "
                        >
                          <Icon size={14} />
                        </button>
                      );
                    })}

                    <div
                      className="
                        ml-auto
                        hidden
                        items-center
                        gap-2
                        text-xs
                        text-zinc-500
                        lg:flex
                      "
                    >
                      <MessageSquare size={14} />
                      Advanced TipTap Editor
                    </div>
                  </div>

                  {/* CONTENT */}
                  <div className="p-3 sm:p-4">
                    <EditorContent editor={editor} />
                  </div>
                </div>

                {/* BUTTON */}

                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={{
                    scale: 1.02,
                  }}
                  whileTap={{
                    scale: 0.98,
                  }}
                  className="
                    group
                    flex
                    h-13
                    items-center
                    justify-center
                    gap-3
                    rounded-2xl
                    bg-gradient-to-r
                    from-fuchsia-500
                    via-purple-500
                    to-cyan-500
                    text-sm
                    font-semibold
                    text-white
                    shadow-[0_0_40px_rgba(168,85,247,0.25)]
                    sm:h-14
                  "
                >
                  {loading ? "Sending..." : "Send Message"}
                  <Send
                    size={17}
                    className="
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                      group-hover:-translate-y-1
                    "
                  />
                </motion.button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
