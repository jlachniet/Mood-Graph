import { Metadata } from '../components/Metadata/Metadata';
import Link from 'next/link';

export default function PrivacyPolicy() {
	return (
		<>
			<Metadata title="Mood Graph - Privacy Policy" url="/privacy-policy" />
			<div className="px-3 py-2 leading-5">
				<main className="m-auto max-w-2xl bg-neutral-100 px-4 py-2 dark:bg-neutral-800">
					<h1 className="my-2 font-display text-2xl font-extrabold">
						Privacy Policy
					</h1>
					<p>
						Julian Lachniet built the Mood Graph app as an Open Source app. This
						SERVICE is provided by Julian Lachniet at no cost and is intended
						for use as is. This page is used to inform visitors regarding my
						policies with the collection, use, and disclosure of Personal
						Information if anyone decided to use my Service. If you choose to
						use my Service, then you agree to the collection and use of
						information in relation to this policy. The Personal Information
						that I collect is used for providing and improving the Service. I
						will not use or share your information with anyone except as
						described in this Privacy Policy.
					</p>
					<h2 className="my-2 font-display text-lg font-semibold">
						Information Collection and Use
					</h2>
					<p className="mb-2">
						For a better experience, while using our Service, I may require you
						to provide us with certain personally identifiable information,
						including but not limited to email or user ID. The information that
						I request will be retained on your device and is collected solely
						for the purpose of making the Service function. The app does use
						third-party services that may collect information used to identify
						you.
					</p>
					<p className="mb-2">
						Link to the privacy policy of third-party service providers used by
						the app:
					</p>
					<ul className="ml-6 list-disc">
						<li>
							<Link href="https://policies.google.com/privacy">
								<a
									className="text-blue-600 dark:text-blue-500"
									target="_blank"
									rel="noopener noreferrer"
								>
									Google Play Services
								</a>
							</Link>
						</li>
					</ul>
					<h2 className="my-2 font-display text-lg font-semibold">Log Data</h2>
					<p>
						I want to inform you that whenever you use my Service, in a case of
						an error in the app I collect data and information (through
						third-party products) on your phone called Log Data. This Log Data
						may include information such as your device Internet Protocol
						(&quot;IP&quot;) address, device name, operating system version, the
						configuration of the app when utilizing my Service, the time and
						date of your use of the Service, and other statistics.
					</p>
					<h2 className="my-2 font-display text-lg font-semibold">Cookies</h2>
					<p>
						Cookies are files with a small amount of data that are commonly used
						as anonymous unique identifiers. These are sent to your browser from
						the websites that you visit and are stored on your device&apos;s
						internal memory. This Service uses cookies in order to be able to
						function. The app may use third-party code and libraries that use
						&quot;cookies&quot; to collect information and improve their
						services.
					</p>
					<h2 className="my-2 font-display text-lg font-semibold">
						Service Providers
					</h2>
					<p className="mb-2">
						I may employ third-party companies and individuals due to the
						following reasons:
					</p>
					<ul className="ml-6 mb-2 list-disc">
						<li>To facilitate our Service;</li>
						<li>To provide the Service on our behalf;</li>
						<li>To perform Service-related services; or</li>
						<li>To assist us in analyzing how our Service is used.</li>
					</ul>
					<p>
						I want to inform users of this Service that these third parties have
						access to their Personal Information. The reason is to perform the
						tasks assigned to them on our behalf. However, they are obligated
						not to disclose or use the information for any other purpose.
					</p>
					<h2 className="my-2 font-display text-lg font-semibold">Security</h2>
					<p>
						I value your trust in providing us your Personal Information, thus
						we are striving to use commercially acceptable means of protecting
						it. But remember that no method of transmission over the internet,
						or method of electronic storage is 100% secure and reliable, and I
						cannot guarantee its absolute security.
					</p>
					<h2 className="my-2 font-display text-lg font-semibold">
						Links to Other Sites
					</h2>
					<p>
						This Service may contain links to other sites. If you click on a
						third-party link, you will be directed to that site. Note that these
						external sites are not operated by me. Therefore, I strongly advise
						you to review the Privacy Policy of these websites. I have no
						control over and assume no responsibility for the content, privacy
						policies, or practices of any third-party sites or services.
					</p>
					<h2 className="my-2 font-display text-lg font-semibold">
						Children&apos;s Privacy
					</h2>
					<p>
						These Services do not address anyone under the age of 13. I do not
						knowingly collect personally identifiable information from children
						under 13 years of age. In the case I discover that a child under 13
						has provided me with personal information, I immediately delete this
						from our servers. If you are a parent or guardian and you are aware
						that your child has provided us with personal information, please
						contact me so that I will be able to do the necessary actions.
					</p>
					<h2 className="my-2 font-display text-lg font-semibold">
						Changes to This Privacy Policy
					</h2>
					<p>
						I may update our Privacy Policy from time to time. Thus, you are
						advised to review this page periodically for any changes. I will
						notify you of any changes by posting the new Privacy Policy on this
						page. This policy is effective as of 2022-03-08.
					</p>
					<h2 className="my-2 font-display text-lg font-semibold">
						Contact Us
					</h2>
					<p className="mb-4">
						If you have any questions or suggestions about my Privacy Policy, do
						not hesitate to contact me at julian@lachniet.com.
					</p>
					<p>
						This privacy policy page was created at{' '}
						<Link href="https://privacypolicytemplate.net">
							<a
								className="text-blue-600 dark:text-blue-500"
								target="_blank"
								rel="noopener noreferrer"
							>
								privacypolicytemplate.net
							</a>
						</Link>
						, modified/generated by{' '}
						<Link href="https://app-privacy-policy-generator.nisrulz.com/">
							<a
								className="text-blue-600 dark:text-blue-500"
								target="_blank"
								rel="noopener noreferrer"
							>
								App Privacy Policy Generator
							</a>
						</Link>
						, and modified by Julian Lachniet.
					</p>
				</main>
			</div>
		</>
	);
}
