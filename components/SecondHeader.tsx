import { getGlobalSettings } from "@/data/loaders";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";

interface NavItem {
    id: string;
    link: {
        type: "reference" | "custom";
        newTab?: boolean;
        url?: string;
        label: string;
        reference?: {
            value: {
                slug: string;
                title: string;
            } | string;
            relationTo: string;
        };
    };
}

export default async function SecondHeader() {
    const data = await getGlobalSettings();

    // Basic safety check if data is missing or structure is different
    if (!data || !data.navItems) {
        return null; // Or render a fallback/skeleton
    }

    const navItems = data.navItems as NavItem[];

    return (
        <header className="w-full border-b bg-white/80 backdrop-blur-md sticky top-0 z-50">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                {/* Logo Area - Assuming there might be a logo in global settings or static */}
                <div className="flex items-center gap-2">
                    {data.logo ? (
                        <Image src={data.logo.url} alt={data.logo.alt || "Logo"} width={150} height={40} className="h-10 w-auto object-contain" />
                    ) : (
                        <Link href="/" className="font-bold text-xl tracking-tight text-gray-900">
                            PQT
                        </Link>
                    )}
                </div>

                {/* Navigation */}
                <nav className="hidden md:flex items-center gap-6">
                    {navItems.map((item) => {
                        const { link } = item;
                        let href = link.url || "#";

                        if (link.type === "reference" && link.reference && typeof link.reference.value === 'object') {
                            // Adjust based on your slug strategy
                            href = `/${link.reference.value.slug}`;
                        }

                        return (
                            <Link
                                key={item.id}
                                href={href}
                                target={link.newTab ? "_blank" : undefined}
                                className="text-sm font-medium text-gray-700 hover:text-primary transition-colors hover:underline underline-offset-4"
                            >
                                {link.label}
                            </Link>
                        );
                    })}
                </nav>

                {/* Action Buttons (if any) */}
                <div className="flex items-center gap-4">
                    <Button variant="default" size="sm">Get Started</Button>
                </div>
            </div>
        </header>
    );
}
