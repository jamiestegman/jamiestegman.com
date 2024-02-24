import { useEffect, useState } from "react";

const timeZone = "Australia/Melbourne";
const getTime = () => new Date().toLocaleTimeString("en-AU", { timeZone });

interface LocalTimeProps extends React.HTMLAttributes<HTMLSpanElement> {}

export const LocalTime = ({ className, ...rest }: LocalTimeProps) => {
    const [time, setTime] = useState("");

    useEffect(() => {
        setTime(getTime());
        const interval = setInterval(() => {
            setTime(getTime());
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <span className={className} {...rest}>
            {time}
        </span>
    );
};
