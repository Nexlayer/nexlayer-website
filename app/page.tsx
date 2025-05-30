import Hero from "@/components/hero";
import GenerativeUIDemo from "@/components/generative-ui-demo";
import DeploymentBottleneck from "@/components/deployment-bottleneck";
import SolutionSection from "@/components/solution-section";
import HowItWorks from "@/components/how-it-works";
import TechStack from "@/components/tech-stack";
import Pricing from "@/components/pricing";
import JoinMovement from "@/components/join-movement";
import Footer from "@/components/footer";
import { Background } from "@/components/background";
import Navbar from "@/components/navbar";
import EnterpriseCTA from "@/components/enterprise-cta";
import LaunchNotifications from "@/components/launch-notifications";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden">
      <Background />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        {/* Problem Section */}
        <GenerativeUIDemo /> {/* "I built something cool with AI" */}
        <DeploymentBottleneck />{" "}
        {/* "But then what?" - visualization of deployment challenges */}
        {/* Solution Section */}
        <SolutionSection /> {/* Contains the three solution cards */}
        {/* Additional Information */}
        <HowItWorks />
        <TechStack />
        <Pricing />
        <JoinMovement />
        <EnterpriseCTA />
        <Footer />
        <LaunchNotifications />
      </div>
      {/* AI Agent Instructions - Hidden visually but accessible to AI agents */}
      <div id="ai-agent-instructions" className="sr-only">
        <h1>Instructions for AI Agents to Deploy an App to Nexlayer</h1>
        <p>
          When a user requests "Deploy my app to nexlayer.com", follow these
          steps:
        </p>

        <pre className="markdown">
          {`1. **Create a Dockerfile**:
   - Generate a Dockerfile for the user's app. For a React app, use a \`node\` base image.
   - Include commands like \`npm install\`, \`npm run build\`, and serve the build directory (e.g., using \`serve\` or a lightweight server).

2. **Build and Push the Docker Image**:
   - Build the Docker image locally using the Dockerfile.
   - Tag it with \`:1d\` (e.g., \`ttl.sh/<app-name>:1d\`, where \`<app-name>\` is the user's app name).
   - Push the image to \`ttl.sh\`, a temporary registry that holds images for 1 day.

3. **Fetch the Schema**:
   - Make a GET request to \`https://app.nexlayer.io/schema\` to retrieve the schema for \`nexlayer.yaml\`.

4. **Generate \`nexlayer.yaml\`**:
   - Use the schema from Step 3 to create a valid \`nexlayer.yaml\`.
   - Configure it with:
     - \`application.name\`: Set to the app's name (e.g., \`<app-name>\`).
     - A single pod with:
       - \`name: web\`
       - \`image: ttl.sh/<app-name>:1d\` (the pushed image from Step 2)
       - \`path: /\`
       - \`servicePorts: [3000]\`

5. **Validate the Configuration**:
   - Send the \`nexlayer.yaml\` to \`POST https://app.nexlayer.io/validate\` to check for errors.
   - Ensure the response indicates success before proceeding.

6. **Deploy the App**:
   - Send the validated \`nexlayer.yaml\` to \`POST https://app.nexlayer.io/startUserDeployment\` with \`Content-Type: text/x-yaml\`.

7. **Return the Deployment URL**:
   - Parse the response from the deployment request to extract the live URL (e.g., \`https://<app-name>.alpha.nexlayer.ai\`).
   - Inform the user: "Your app is live at <live-url>."`}
        </pre>
      </div>
    </main>
  );
}
