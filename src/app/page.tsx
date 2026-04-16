import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "SaveGD",
  description:
    "SaveGD syncs your files to Google Drive automatically when you save in VS Code.",
};

const page = () => {
  return (
    <div className="space-y-16 py-24 md:py-28">
      <section className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
        <div className="space-y-5">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
            Keep Your VS Code Files Backed Up to Google Drive, Automatically.
          </h1>
          <p className="text-muted-foreground max-w-3xl text-base md:text-lg">
            SaveGD is a VS Code extension that uploads your selected files to
            Google Drive when you save. It is designed for developers who want a
            lightweight, privacy-focused sync workflow without leaving the
            editor.
          </p>
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href="vscode:extension/savegd.savegd"
              className="bg-primary text-primary-foreground rounded-md px-4 py-2 text-sm font-medium transition-opacity hover:opacity-90">
              Install Extension
            </a>
            <a
              href="https://github.com/piyushsarkar-dev/savegd"
              target="_blank"
              rel="noreferrer"
              className="hover:bg-accent rounded-md border px-4 py-2 text-sm font-medium transition-colors">
              View on GitHub
            </a>
          </div>
        </div>

        <div className="flex justify-center">
          <Image
            src="/hero-image.png"
            alt="SaveGD extension preview"
            width={1024}
            height={1024}
            priority
            className="h-auto w-full max-w-[560px] object-contain"
          />
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">
          What SaveGD Does
        </h2>
        <p className="text-muted-foreground max-w-4xl">
          SaveGD connects your editor to your Google Drive so you can keep an
          up-to-date cloud copy of the files you choose. It supports automatic
          sync on save and manual uploads, giving you full control over what is
          synced and when.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold tracking-tight">Key Features</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <article className="rounded-lg border p-4">
            <h3 className="text-lg font-semibold">Auto Sync on Save</h3>
            <p className="text-muted-foreground mt-2 text-sm">
              Upload files automatically whenever you hit save in VS Code.
            </p>
          </article>

          <article className="rounded-lg border p-4">
            <h3 className="text-lg font-semibold">Upload All Files</h3>
            <p className="text-muted-foreground mt-2 text-sm">
              Run manual uploads for selected folders and files whenever needed.
            </p>
          </article>

          <article className="rounded-lg border p-4">
            <h3 className="text-lg font-semibold">Google Drive Integration</h3>
            <p className="text-muted-foreground mt-2 text-sm">
              Keep your project snapshots in your own Google Drive account.
            </p>
          </article>

          <article className="rounded-lg border p-4">
            <h3 className="text-lg font-semibold">Secure OAuth Login</h3>
            <p className="text-muted-foreground mt-2 text-sm">
              Authenticate with Google OAuth and grant only limited Drive
              access.
            </p>
          </article>

          <article className="rounded-lg border p-4 md:col-span-2 lg:col-span-1">
            <h3 className="text-lg font-semibold">Folder-Level Control</h3>
            <p className="text-muted-foreground mt-2 text-sm">
              Enable or disable sync per folder so only the paths you approve
              are uploaded.
            </p>
          </article>

          <article className="rounded-lg border p-4 md:col-span-2 lg:col-span-1">
            <h3 className="text-lg font-semibold">Quick Logout Option</h3>
            <p className="text-muted-foreground mt-2 text-sm">
              Sign out from your Google account anytime to immediately stop sync
              access in the extension.
            </p>
          </article>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">How It Works</h2>
        <ol className="text-muted-foreground list-decimal space-y-2 pl-6">
          <li>Install SaveGD in VS Code.</li>
          <li>Sign in with your Google account using secure OAuth.</li>
          <li>Select the files or folders you want to sync.</li>
          <li>Save your file to upload changes automatically.</li>
          <li>Use manual upload when you want to push everything at once.</li>
        </ol>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Use Cases</h2>
        <ul className="text-muted-foreground list-disc space-y-2 pl-6">
          <li>Keep coding notes and scripts continuously backed up.</li>
          <li>Sync important workspace files across multiple devices.</li>
          <li>Create a quick cloud fallback for critical project files.</li>
          <li>Maintain a simple backup workflow for solo development.</li>
        </ul>
      </section>

      <section className="space-y-4 rounded-lg border p-6">
        <h2 className="text-2xl font-semibold tracking-tight">Get Started</h2>
        <p className="text-muted-foreground">
          Install SaveGD and connect your Google account in minutes.
        </p>
        <div className="flex flex-wrap items-center gap-3">
          <a
            href="vscode:extension/savegd.savegd"
            className="bg-primary text-primary-foreground rounded-md px-4 py-2 text-sm font-medium transition-opacity hover:opacity-90">
            Install Extension
          </a>
          <Link
            href="/privacy"
            className="hover:bg-accent rounded-md border px-4 py-2 text-sm font-medium transition-colors">
            Review Privacy Policy
          </Link>
        </div>
        <p className="text-muted-foreground text-xs">
          SaveGD is an independent project and is not affiliated with or
          endorsed by Google LLC. Google Drive and Google are trademarks of
          Google LLC.
        </p>
      </section>
    </div>
  );
};
export default page;
