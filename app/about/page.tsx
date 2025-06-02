// components/ProblemStatement.tsx

const ProblemStatement = () => {
  return (
    <div className="mt-20 max-w-4xl mx-auto px-6 py-12 text-gray-900">
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">The Problem We Couldn't Ignore</h2>
        <p className="mb-2">Deployment in 2025 is embarrassingly broken.</p>
        <p className="mb-2">
          AI can build entire applications in hours. Getting them live still takes weeks of infrastructure hell.
          The most brilliant ideas are dying in deployment complexity.
        </p>
        <p className="italic">This had to change.</p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
        <p className="mb-2">
          <strong>AuditDeploy Inc.</strong> is an applied research lab automating technology deployment.
        </p>
        <p className="mb-2">
          We're building <strong>The AI Architect</strong>—an intelligent system that's an order of magnitude more effective than any cloud engineer or DevOps team. It turns any codebase into a live, scalable product in seconds, not weeks.
        </p>
        <p className="italic">Because when AI builds, AI should ship.</p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Nexlayer: The Future Made Real</h2>
        <p className="mb-2">
          Our flagship product, <strong>Nexlayer</strong>, brings this vision to life: the first AI-native cloud platform that deploys, scales, and operates applications instantly.
        </p>
        <p className="mb-2">One launchfile. Full stack. Live in seconds.</p>
        <p>No infrastructure PhDs required. No deployment hell. Just pure execution at AI speed.</p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">The World We're Building</h2>
        <p className="mb-2">
          This new generation of creators won't just write code—they'll launch autonomous systems, digital worlds, immersive platforms, and products that change how people think, live, play, and work.
        </p>
        <p className="mb-2">
          They'll ship and scale without ever touching a terminal. With AI as their deployment partner, they'll move at the speed of intuition across the most complex systems.
        </p>
        <p className="italic">This is what becomes possible when deployment friction approaches zero.</p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Our Ultimate Vision</h2>
        <p className="mb-2">
          We are building <strong>the cloud for 1 billion AI agents</strong>—infrastructure that AI can talk to, understand, and command directly.
        </p>
        <p>A cloud that listens. A cloud that executes. A cloud that gets out of the way.</p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">The Team</h2>
        <p className="mb-2">
          We're engineers, designers, and researchers working at the frontier of AI and cloud automation. We're not just making infrastructure easier—we're redefining what it means to ship at AI speed and scale.
        </p>
        <p className="italic mb-2">The future belongs to those who ship fastest.</p>
        <p className="mb-2">If this vision resonates, we'd love to build the future with you.</p>
        <p>— Sal, Armond, Katie, John, Amish, and the entire AuditDeploy team</p>
      </section>

      <div className="text-center my-10">
        <a
          href="https://community.nexlayer.com"
          className="font-semibold text-[#37a9b4] hover:underline mx-4"
        >
          [Join the Revolution]
        </a>
        <span className="text-gray-500">|</span>
        <a
          href="https://nexlayer.com/playground"
          className="font-semibold text-[#37a9b4] hover:underline mx-4"
        >
          [Experience Nexlayer]
        </a>
      </div>

      <hr className="my-8 border-gray-300" />

      <p className="text-center italic pb-10">
        "When infrastructure becomes invisible, innovation becomes inevitable."
      </p>
    </div>
  );
};

export default ProblemStatement;
