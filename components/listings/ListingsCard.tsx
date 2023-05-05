"use client";

import { format } from "date-fns";
import Image from "next/image";
import React, { useCallback, useMemo } from "react";
import { useCountries } from "@/hooks";
import { SafeListing, SafeReservation, SafeUser } from "@/types";
import { cn } from "@/libs/utils";
import Link from "next/link";
import { Button, HeartButton } from "@/components";

interface ListingCardProps {
  data: SafeListing;
  reservation?: SafeReservation;
  onAction?: (id: string) => void;
  disabled?: boolean;
  actionLabel?: string;
  actionId?: string;
  currentUser?: SafeUser | null;
}

const ListingCard: React.FC<ListingCardProps> = ({
  data,
  reservation,
  onAction,
  disabled,
  actionLabel,
  actionId = "",
  currentUser,
}) => {
  const { getByValue } = useCountries();

  const location = getByValue(data.locationValue);

  const handleCancel = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();

      if (disabled) {
        return;
      }

      onAction?.(actionId);
    },
    [disabled, onAction, actionId]
  );

  const price = useMemo(() => {
    if (reservation) {
      return reservation.totalPrice;
    }

    return data.price;
  }, [reservation, data.price]);

  const reservationDate = useMemo(() => {
    if (!reservation) {
      return null;
    }

    const start = new Date(reservation.startDate);
    const end = new Date(reservation.endDate);

    return `${format(start, "PP")} - ${format(end, "PP")}`;
  }, [reservation]);

  return (
    <div className="group col-span-1 cursor-pointer">
      <div className="flex w-full flex-col gap-2">
        <div className="relative aspect-square w-full overflow-hidden rounded-xl">
          <LinkItem
            href={`/listings/${data.id}`}
            isImage
            aria-label="Browse listing"
          >
            <Image
              width={900}
              height={600}
              className="h-full w-full object-cover transition group-hover:scale-110"
              src={data.imageSrc}
              alt="Listing"
              priority
            />
          </LinkItem>
          <div className="absolute right-3 top-3">
            <HeartButton listingId={data.id} currentUser={currentUser} />
          </div>
        </div>
        <LinkItem
          href={`/listings/${data.id}`}
          className="flex w-full flex-col gap-2"
          aria-label="Browse listing"
        >
          <p className="text-lg font-semibold">
            {location?.region}, {location?.label}
          </p>
          <p className="font-light text-neutral-500">
            {reservationDate || data.category}
          </p>
          <div className="flex flex-row items-center gap-1">
            <p className="font-semibold">${price}</p>
            {!reservation && <p className="font-light">night</p>}
          </div>
        </LinkItem>
        {onAction && actionLabel && (
          <Button
            disabled={disabled}
            small
            label={actionLabel}
            onClick={handleCancel}
          />
        )}
      </div>
    </div>
  );
};

type CustomLinkProps = {
  isImage?: boolean;
};

interface LinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    CustomLinkProps {
  children: React.ReactNode;
  href: string;
}

const LinkItem = React.forwardRef<HTMLAnchorElement, LinkProps>(
  ({ children, className, isImage, ...props }, ref) => {
    return (
      <Link
        {...props}
        ref={ref}
        className={cn(className, isImage && "h-full w-full")}
      >
        {children}
      </Link>
    );
  }
);

LinkItem.displayName = "LinkItem";

export default ListingCard;
