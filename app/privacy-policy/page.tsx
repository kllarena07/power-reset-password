import Head from "next/head";

export default function PrivacyPolicy() {
  return (
    <div className="max-w-3xl mx-auto p-5 font-sans">
      <Head>
        <title>Privacy Policy</title>
        <meta
          name="description"
          content="Privacy policy for Society of Women Engineers at the University of Michigan-Dearborn"
        />
      </Head>
      <header>
        <h1 className="text-4xl text-center font-bold mb-2.5">
          PRIVACY POLICY
        </h1>
        <p className="text-xl text-center text-gray-500">
          Last updated February 27, 2025
        </p>
      </header>
      <section className="mt-5">
        <h2 className="text-2xl font-bold text-blue-600">
          Summary of Key Points
        </h2>
        <p>
          Reading this Privacy Notice will help you understand your privacy
          rights and choices.
        </p>
        <p>
          If you do not agree with our policies and practices, please do not use
          our Services.
        </p>
        <p>
          For any questions or concerns, contact us at{" "}
          <a
            href="mailto:umd.swe@gmail.com"
            className="text-blue-600 hover:underline"
          >
            umd.swe@gmail.com
          </a>
          .
        </p>
      </section>
      <section className="mt-5">
        <h2 className="text-2xl font-bold text-blue-600">Table of Contents</h2>
        <ul className="list-disc pl-5">
          <li>
            <a href="#infocollect" className="text-blue-600 hover:underline">
              1. What Information Do We Collect?
            </a>
          </li>
          <li>
            <a href="#infouse" className="text-blue-600 hover:underline">
              2. How Do We Process Your Information?
            </a>
          </li>
          <li>
            <a href="#whoshare" className="text-blue-600 hover:underline">
              3. When and With Whom Do We Share Your Personal Information?
            </a>
          </li>
          <li>
            <a href="#inforetain" className="text-blue-600 hover:underline">
              4. How Long Do We Keep Your Information?
            </a>
          </li>
          <li>
            <a href="#infosafe" className="text-blue-600 hover:underline">
              5. How Do We Keep Your Information Safe?
            </a>
          </li>
          <li>
            <a href="#privacyrights" className="text-blue-600 hover:underline">
              6. What Are Your Privacy Rights?
            </a>
          </li>
        </ul>
      </section>
      <section className="mt-5" id="infocollect">
        <h2 className="text-2xl font-bold text-blue-600">
          1. What Information Do We Collect?
        </h2>
        <p>
          We collect personal information that you voluntarily provide to us
          when you register on the Services, express an interest in obtaining
          information about us or our products and Services, or otherwise when
          you contact us.
        </p>
        <ul className="list-disc pl-5">
          <li>Names</li>
          <li>Email addresses</li>
          <li>Passwords</li>
        </ul>
      </section>
      <section className="mt-5" id="infouse">
        <h2 className="text-2xl font-bold text-blue-600">
          2. How Do We Process Your Information?
        </h2>
        <p>
          We process your information to provide, improve, and administer our
          Services, communicate with you, and for security and fraud prevention.
        </p>
      </section>
      <section className="mt-5" id="whoshare">
        <h2 className="text-2xl font-bold text-blue-600">
          3. When and With Whom Do We Share Your Personal Information?
        </h2>
        <p>
          We may share information in specific situations such as business
          transfers or legal obligations.
        </p>
      </section>
      <section className="mt-5" id="inforetain">
        <h2 className="text-2xl font-bold text-blue-600">
          4. How Long Do We Keep Your Information?
        </h2>
        <p>
          We keep your information for as long as necessary to fulfill the
          purposes outlined in this Privacy Notice unless otherwise required by
          law.
        </p>
      </section>
      <section className="mt-5" id="infosafe">
        <h2 className="text-2xl font-bold text-blue-600">
          5. How Do We Keep Your Information Safe?
        </h2>
        <p>
          We have implemented appropriate and reasonable security measures
          designed to protect the security of any personal information we
          process. However, despite our safeguards and efforts to secure your
          information, no electronic transmission over the Internet or
          information storage technology can be guaranteed to be 100% secure.
        </p>
      </section>
      <section className="mt-5" id="privacyrights">
        <h2 className="text-2xl font-bold text-blue-600">
          6. What Are Your Privacy Rights?
        </h2>
        <p>
          You may review, change, or terminate your account at any time by
          contacting us.
        </p>
      </section>
    </div>
  );
}
