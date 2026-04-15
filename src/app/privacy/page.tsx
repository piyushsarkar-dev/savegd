import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | SaveGD",
  description: "SaveGD Privacy Policy for Google OAuth verification.",
};

const PrivacyPage = () => {
  return (
    <div className="space-y-8 py-24 md:py-28">
      <section className="space-y-3">
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
          Privacy Policy
        </h1>
        <p className="text-muted-foreground max-w-3xl">
          Effective date: April 15, 2026. This Privacy Policy explains how
          SaveGD handles data when you use the SaveGD VS Code extension.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold tracking-tight">Overview</h2>
        <p className="text-muted-foreground">
          SaveGD is built to help users sync selected files from Visual Studio
          Code to their Google Drive account. SaveGD is privacy-focused and does
          not collect or sell personal data.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold tracking-tight">
          Information We Access
        </h2>
        <h3 className="text-lg font-semibold">Google OAuth and Drive Access</h3>
        <p className="text-muted-foreground">
          SaveGD uses Google OAuth to authenticate users and request limited
          Google Drive access through the drive.file scope. This scope allows
          the extension to view and manage only files that the user explicitly
          creates or selects with SaveGD.
        </p>
        <h3 className="text-lg font-semibold">No Personal Data Collection</h3>
        <p className="text-muted-foreground">
          SaveGD does not collect, store, analyze, or share personal user data,
          including account profile information, file contents for analytics, or
          usage tracking data.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold tracking-tight">
          How Data Is Used
        </h2>
        <ul className="text-muted-foreground list-disc space-y-2 pl-6">
          <li>
            File access is used only to upload and synchronize user-selected
            files to the user&apos;s Google Drive.
          </li>
          <li>
            Data remains in the user&apos;s own Google Drive account under the
            user&apos;s control.
          </li>
          <li>
            SaveGD does not use data for advertising, profiling, or marketing.
          </li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold tracking-tight">Data Sharing</h2>
        <p className="text-muted-foreground">
          SaveGD does not share user data with third parties. No personal data
          is sold, rented, or disclosed for commercial purposes.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold tracking-tight">Security</h2>
        <p className="text-muted-foreground">
          SaveGD uses Google OAuth authentication and relies on Google Drive
          security controls for file storage. Access is limited to authorized
          operations requested by the user. Users can revoke SaveGD access at
          any time through their Google account permissions.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold tracking-tight">User Control</h2>
        <p className="text-muted-foreground">
          Users control which files or folders are synced and can enable or
          disable sync behavior from the extension settings. Uninstalling the
          extension stops all SaveGD syncing activity.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold tracking-tight">Contact</h2>
        <p className="text-muted-foreground">
          For privacy questions, contact: support@savegd.dev
        </p>
      </section>
    </div>
  );
};

export default PrivacyPage;
