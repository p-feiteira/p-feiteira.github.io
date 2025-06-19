"use client"
import { Card, CardContent } from "@/components/ui/card";

type CardProps = {
    Icon?: React.ReactNode;
    title: string;
    children: string;
    className?: string;
    compact?: boolean;
    alignLeft?: boolean;
};

export default function InfoCard({Icon ,title, children, className, compact = false, alignLeft = false }: CardProps) {
    return <Card className={`w-full hover-lift bg-muted-foreground/5 dark:bg-muted/10 transition-shadow duration-300 my-3 ${compact ? 'h-20 sm:h-24' : ''} ${className ?? ''} ${compact ? 'h-full' : ''}`}>
        <CardContent className={`w-full ${compact ? 'p-2 sm:p-4 flex flex-col justify-center items-center h-full' : 'p-4 sm:p-6 flex flex-col items-start'}`}>
            <div className={`flex gap-2 ${compact ? (alignLeft ? 'flex-row items-center justify-center w-full text-center' : 'flex-col justify-center items-center w-full text-center gap-1') : 'items-center'}`}>
                {Icon}
                <span className={`${compact ? 'text-lg' : 'text-base sm:text-xl'} font-semibold`}>{title}</span>
            </div>
            {!compact && <p className="text-muted-foreground text-sm sm:text-base mt-4 w-full">{children}</p>}
        </CardContent>
    </Card>
}