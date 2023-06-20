"use client";

import { useRouter } from "next/navigation";
import Heading from "./Heading";
import Button from "./Button";

interface EmptyStateProps {
  title?: string;
  subtitle?: string;
  showReset?: boolean;
}
const EmptyState: React.FC<EmptyStateProps> = ({
  title = "No results found",
  subtitle = "Try adjusting your search or filter to find what you're looking for.",
  showReset,
}) => {
  const router = useRouter();
  return (
    <div
      className="
    h-[calc(100vh-4rem)]
    flex
    flex-col
    items-center
    justify-center
    w-full
    text-center

  "
    >
      <Heading center title={title} subtitle={subtitle} />

      <div className="w-48 mt-4">
        {showReset && (
          <Button
            outline
            label="Remove all filters"
            onClick={() => router.push("/")}
          />
        )}
      </div>
    </div>
  );
};

export default EmptyState;
