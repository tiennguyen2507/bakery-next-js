import dynamic from "next/dynamic";

const BaseModal = dynamic(() => import("./BaseModal"), { ssr: false });

export default BaseModal;
