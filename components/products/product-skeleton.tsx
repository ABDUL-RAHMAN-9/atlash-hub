import { Skeleton } from "@/components/ui/skeleton";

interface ProductSkeletonProps {
    itemCount?: number;
    titleWidth?: string;
    sectionClassName?: string;
}

export default function ProductSkeleton({
    itemCount = 6,
    titleWidth = "w-64",
    sectionClassName = "py-24 bg-background",
}: ProductSkeletonProps) {
    return (
        <section className={sectionClassName}>
            <div className="wrapper">
                {/* 1. HEADER SECTION */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-foreground/5 pb-10">
                    <div className="space-y-5 flex-1">
                        {/* ICON + SMALL LABEL */}
                        <div className="flex items-center gap-2">
                            <Skeleton className="size-4 rounded bg-primary/20 border border-primary/10" />
                            <Skeleton className="h-3 w-48 bg-foreground/10 rounded-full" />
                        </div>

                        {/* MAIN HEADING */}
                        <Skeleton className={`h-10 ${titleWidth} bg-foreground/30 rounded-lg`} />

                        {/* DESCRIPTION */}
                        <div className="space-y-2">
                            <Skeleton className="h-4 w-80 bg-foreground/10 rounded-md" />
                        </div>
                    </div>

                    {/* CTA BUTTON */}
                    <div className="shrink-0 hidden md:block">
                        <Skeleton className="h-11 w-44 rounded-full border border-foreground/10 bg-foreground/5" />
                    </div>
                </div>

                {/* 2. PRODUCT GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {Array.from({ length: itemCount }).map((_, index) => (
                        <div
                            key={index}
                            className="relative bg-secondary/5 border border-foreground/5 rounded-[2rem] p-8 min-h-[260px] flex flex-col justify-between"
                        >
                            {/* ELITE NODE BADGE */}
                            <div className="absolute top-6 right-8">
                                <Skeleton className="h-5 w-20 rounded-full bg-primary/10 border border-primary/5" />
                            </div>

                            <div className="flex justify-between items-start gap-4">
                                <div className="space-y-5 flex-1">
                                    {/* CARD TITLE */}
                                    <Skeleton className="h-6 w-1/2 bg-foreground/30 rounded-md" />

                                    {/* CARD DESCRIPTION */}
                                    <div className="space-y-2.5">
                                        <Skeleton className="h-2.5 w-full bg-foreground/10 rounded-full" />
                                        <Skeleton className="h-2.5 w-4/5 bg-foreground/10 rounded-full" />
                                    </div>
                                </div>

                                {/* VOTE BOX */}
                                <div className="mt-12 flex flex-col border border-foreground/10 rounded-xl bg-background/50 overflow-hidden shrink-0">
                                    <Skeleton className="h-7 w-10 rounded-none bg-foreground/10" />
                                    <div className="py-2 flex justify-center">
                                        <Skeleton className="size-2.5 rounded-sm bg-foreground/20" />
                                    </div>
                                </div>
                            </div>

                            {/* TAG PILLS */}
                            <div className="flex gap-2 pt-6">
                                <Skeleton className="h-6 w-12 rounded-full bg-foreground/5 border border-foreground/10" />
                                <Skeleton className="h-6 w-20 rounded-full bg-foreground/5 border border-foreground/10" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}