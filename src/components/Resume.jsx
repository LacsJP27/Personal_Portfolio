export default function Resume() {
    return (
        <div style={{ position: "fixed", inset: 0, width: "100vw", height: "100vh" }}>
            <iframe
                src="/JPLacsamana_Resume.pdf"
                title="Resume"
                width="100%"
                height="100%"
                style={{ border: "none", display: "block" }}
            />
        </div>
    );
}
