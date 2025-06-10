"use client"
import { Card, CardContent } from "@/components/ui/card";

type CardProps = {
    Icon?: any;
    title: string;
    children: string;
};

export default function InfoCard({Icon ,title, children }: CardProps) {
    return <Card className="hover-lift bg-muted-foreground/5 dark:bg-muted/10 transition-shadow duration-300 my-3">
        <CardContent className="p-6">
            <div className="flex items-center gap-2 mb-4">
                {Icon && <Icon className="h-6 w-6 text-primary" />}
                <span className="text-xl font-semibold">{title}</span>
            </div>
            <p className="text-muted-foreground">{children}</p>
        </CardContent>
    </Card>
}