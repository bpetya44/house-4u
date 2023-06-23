import { Reservation } from "@prisma/client";

import { SafeUser, SafeListing } from "@/app/types";

interface ListingClientProps {
  reservations?: Reservation[];
  listing: SafeListing & {
    user: SafeUser;
  };
  currentUser?: SafeUser | null;
}

const ListingClient: React.FC<ListingClientProps> = ({
  listing,
  currentUser,
}) => {
  return <div>ListingClient</div>;
};

export default ListingClient;
