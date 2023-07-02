import EmptyState from "../components/EmptyState";

import getCurrentUser from "../actions/getCurrentUser";
import getFavourites from "../actions/getFavourites";

import FavouritesClient from "./FavouritesClient";

const FavouritesPage = async () => {
  const currentUser = await getCurrentUser();
  const listings = await getFavourites();

  if (!currentUser) {
    return (
      <EmptyState
        title="Unauthorized"
        subtitle="Please log in to view this page"
      />
    );
  }

  if (listings.length === 0) {
    return (
      <EmptyState
        title="No favourites found"
        subtitle="It looks like you haven no favourite listings yet."
      />
    );
  }

  return <FavouritesClient listings={listings} currentUser={currentUser} />;
};

export default FavouritesPage;
