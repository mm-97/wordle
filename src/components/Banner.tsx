import type {ReactNode} from "react";

type BannerProps = {
    status: 'error' | 'success' | 'info' | 'warning';
    children: ReactNode;
}

export default function Banner({status, children}: BannerProps) {
    return (
        <div className="banner-overlay">
            <div className={`banner ${status}`}>
                {children}
            </div>
        </div>
    )
}