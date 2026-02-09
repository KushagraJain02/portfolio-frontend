import CPHeader from "../components/CP/CPHeader";
import CPStats from "../components/CP/CPStats";
import CompetitiveProgrammingPortfolio from "../components/CP/CompetitiveProgrammingPortfolio";
import { cpStats, cpHighlights } from "../data/cpData";

const CP = () => {
  return (
    <main className="bg-white text-gray-900 px-8 lg:px-32">
      <CPHeader />
      <CPStats stats={cpStats} />
      <CompetitiveProgrammingPortfolio highlights={cpHighlights} />
    </main>
  );
};

export default CP;
