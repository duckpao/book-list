type rating = 1 | 2 | 3 | 4 | 5;

interface ReviewerType {
  id: string;
  name: string;
  comment: string;
  rating: rating;
}

export const reviewerData: ReviewerType[] = [
  {
    id: "1",
    name: "Emma Chamberlin",
    comment:
      "I stumbled upon this bookstore while visiting the city, and it instantly became my favorite spot. The cozy atmosphere, friendly staff, and wide selection of books make every visit a delight!",
    rating: 5,
  },
  {
    id: "2",
    name: "Thomas John",
    comment:
      "As an avid reader, I'm always on the lookout for new releases, and this bookstore never disappoints. They always have the latest titles, and their recommendations have introduced me to some incredible reads!",
    rating: 5,
  },
  {
    id: "3",
    name: "Kevin Bryan",
    comment:
      "I ordered a few books online from this store, and I was impressed by the quick delivery and careful packaging. It's clear that they prioritize customer satisfaction, and I'll definitely be shopping here again!",
    rating: 5,
  },
];
