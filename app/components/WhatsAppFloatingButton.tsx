import Link from "next/link";

const WHATSAPP_PHONE_NUMBER = "27627152900";
const PREFILLED_MESSAGE = "Hi softwared, I'm interested in your services";

const encodedMessage = encodeURIComponent(PREFILLED_MESSAGE);
const whatsappHref = `https://wa.me/${WHATSAPP_PHONE_NUMBER}?text=${encodedMessage}`;

export default function WhatsAppFloatingButton() {
  return (
    <div className="fixed bottom-[20px] left-[20px] z-50">
      <Link
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        prefetch={false}
        aria-label="Chat with us on WhatsApp"
        className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_12px_30px_rgba(2,6,23,0.22)] transition-colors hover:bg-[#1FB457] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[color:var(--accent)]"
      >
        <span className="sr-only">Chat with us on WhatsApp</span>
        <svg
          aria-hidden="true"
          viewBox="0 0 32 32"
          className="h-8 w-8"
          fill="currentColor"
        >
          <path d="M16 3C9.383 3 4 8.158 4 14.5c0 2.493.84 4.803 2.28 6.683L5 29l8.091-2.163A12.6 12.6 0 0 0 16 26c6.617 0 12-5.158 12-11.5S22.617 3 16 3Zm0 21a10.5 10.5 0 0 1-2.52-.31l-.884-.215-4.802 1.285 1.312-4.558-.584-.865A9.34 9.34 0 0 1 6 14.5C6 9.262 10.486 5 16 5s10 4.262 10 9.5S21.514 24 16 24Zm5.693-7.02c-.29-.142-1.713-.83-1.978-.924-.265-.095-.458-.143-.65.142-.192.285-.747.924-.915 1.11-.168.19-.337.214-.626.072-.29-.143-1.224-.439-2.33-1.397-.86-.742-1.44-1.658-1.608-1.943-.168-.285-.018-.44.127-.581.13-.127.29-.332.434-.498.145-.166.193-.285.29-.475.096-.19.048-.356-.024-.498-.072-.142-.65-1.544-.891-2.116-.235-.56-.473-.484-.65-.493l-.554-.01c-.192 0-.505.072-.77.356-.265.285-1.01.972-1.01 2.372 0 1.4 1.034 2.754 1.179 2.944.145.19 2.036 3.212 4.987 4.373.702.277 1.25.442 1.676.566.704.22 1.346.19 1.853.116.565-.082 1.713-.688 1.954-1.35.241-.664.241-1.23.168-1.35-.072-.12-.265-.19-.554-.333Z" />
        </svg>
      </Link>
    </div>
  );
}
