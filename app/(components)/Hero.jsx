import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  FingerPrintIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

const features = [
  {
    name: "High-Quality Outputs",
    description:
      "We are committed to delivering high-quality outputs. Certificates created with CB are available in high-resolution formats suitable for both digital sharing and professional printing. This ensures that every certificate maintains its integrity and looks pristine, whether it's viewed on a screen or framed on a wall.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "Exceptional Design Quality",
    description:
      "At CB, we prioritize visual excellence. Each certificate is meticulously crafted with professional design aesthetics to ensure it stands out. Whether it's for academic achievements, professional milestones, or special recognitions, our certificates look authentic and prestigious, ready to impress and inspire pride in the recipient.",
    icon: LockClosedIcon,
  },
  {
    name: "User-Friendly Interface",
    description:
      "Our platform is designed with the user in mind. The intuitive interface allows for easy navigation and seamless certificate creation. From selecting templates to customizing details, the entire process is straightforward and hassle-free, enabling users to create stunning certificates in minutes without any technical expertise.",
    icon: ArrowPathIcon,
  },
  {
    name: "Customization and Personalization",
    description:
      "CB offers a high degree of customization, allowing users to tailor each certificate to their specific needs. Users can choose from a variety of templates, fonts, colors, and graphics. Additionally, our platform supports the inclusion of logos, signatures, and other personalized elements, ensuring each certificate reflects the unique brand and style of the issuing organization.",
    icon: FingerPrintIcon,
  },
];

export default function Navbar() {
  return (
    <div className="bg-[#E0E0E0] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className=" text-indigo-600 text-7xl border border-b-2 rounded-2xl bg-indigo-200 border-indigo-200 font-extralight">
            <Link href="/CB" className="border border-indigo-600 rounded-full">
              CB
            </Link>
          </h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance">
            Everything Certificate you need for showcasing
          </p>
          <p className="mt-6 text-lg/8 text-gray-600">
            CB’s mission is simple yet profound: to transform the way we
            acknowledge and celebrate achievements. Whether it's educational
            milestones, professional certifications, or special recognitions, CB
            ensures that every certificate crafted is not just a piece of paper
            but a testament to hard work, talent, and success.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base/7 font-semibold text-gray-900">
                  <div className="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon
                      aria-hidden="true"
                      className="size-6 text-white"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base/7 text-gray-600">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
