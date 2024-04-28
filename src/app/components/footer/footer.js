import { Footer, FooterBrand, FooterCopyright, FooterDivider, FooterLink, FooterLinkGroup } from "flowbite-react";

export default function FooterWrapper() {
    return (
        <Footer container className="bg-black">
            <div className="w-full text-center">
                <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
                    <FooterBrand
                        href="https://flowbite.com"
                        src="https://flowbite.com/docs/images/logo.svg"
                        alt="Manifest Logo"
                        name="Manifest"
                        className="text-white"
                    />
                    <FooterLinkGroup>
                        <FooterLink href="#">Documents</FooterLink>
                        <FooterLink href="#">Create</FooterLink>
                        <FooterLink href="#">Privacy Policy</FooterLink>
                        <FooterLink href="#">Licensing</FooterLink>
                        <FooterLink href="#">Contact</FooterLink>
                    </FooterLinkGroup>
                </div>
                <FooterDivider />
                <FooterCopyright href="#" by="Manifest" year={2024} />
            </div>
        </Footer>
    )
}