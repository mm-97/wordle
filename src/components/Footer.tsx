type FooterProps = {
    repoUrl: string;
}

export default function Footer({repoUrl}: FooterProps) {
    return (
        <footer className="app-footer">
            <a
                className="app-footer-link"
                href={repoUrl}
                target="_blank"
                rel="noreferrer"
            >
                View project on GitHub
            </a>
        </footer>
    )
}

