import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | SaveGD",
  description: "Terms of Service for the SaveGD VS Code extension.",
};

const TermsPage = () => {
  return (
    <div className="space-y-8 py-24 md:py-28">
      <section className="space-y-3">
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
          Terms of Service
        </h1>
        <p className="text-muted-foreground max-w-3xl">
          Effective date: April 15, 2026. These Terms of Service govern your use
          of the SaveGD VS Code extension.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold tracking-tight">
          Acceptance of Terms
        </h2>
        <p className="text-muted-foreground">
          By installing or using SaveGD, you agree to these Terms of Service. If
          you do not agree, do not use the extension.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold tracking-tight">
          Service Provided As Is
        </h2>
        <p className="text-muted-foreground">
          SaveGD is provided on an "as is" and "as available" basis, without
          warranties of any kind, express or implied.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold tracking-tight">
          User Responsibility
        </h2>
        <ul className="text-muted-foreground list-disc space-y-2 pl-6">
          <li>
            You are responsible for the files you choose to sync and store.
          </li>
          <li>
            You are responsible for maintaining your own backup and recovery
            strategy.
          </li>
          <li>
            You are responsible for keeping your Google account credentials
            secure.
          </li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold tracking-tight">
          Limitation of Liability
        </h2>
        <p className="text-muted-foreground">
          To the maximum extent permitted by law, SaveGD and its maintainers are
          not liable for data loss, service interruptions, unauthorized access,
          indirect damages, or any consequential damages resulting from use of
          the extension.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold tracking-tight">
          Lawful and Proper Use
        </h2>
        <p className="text-muted-foreground">
          You agree to use SaveGD in compliance with all applicable laws,
          regulations, and platform terms, including Google and Visual Studio
          Code policies.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold tracking-tight">
          Google Account and Permissions
        </h2>
        <p className="text-muted-foreground">
          SaveGD uses Google OAuth for authentication and requests only limited
          Google Drive access required for selected file sync. You may revoke
          access at any time through your Google account settings.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold tracking-tight">
          Third-Party Service and Trademarks
        </h2>
        <p className="text-muted-foreground">
          SaveGD integrates with Google services but is an independent product
          and is not affiliated with or endorsed by Google LLC. Google and
          Google Drive are trademarks of Google LLC.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold tracking-tight">Updates</h2>
        <p className="text-muted-foreground">
          These terms may be updated from time to time. Continued use of SaveGD
          after updates become effective constitutes acceptance of the revised
          terms.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold tracking-tight">Contact</h2>
        <p className="text-muted-foreground">
          For questions about these terms, contact: support@savegd.dev
        </p>
      </section>
    </div>
  );
};

export default TermsPage;
