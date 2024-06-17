import { FC, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Header from "../components/Header";
import QuoteOptions from "../components/QuoteOptions";
import Steps from "../components/StepsComponent";
import PlanCard from "../components/PlanCard";
import Pagination from "../components/Pagination";
import LoadingOverlay from "../components/LoadingOverlay";
import BackButton from "../components/BackButton";

import { getUserAge } from "../utils/getUserAge";

import { useUserStore } from "../store";
import { getUserData } from "../services/userService";
import { getPlans } from "../services/planService";

interface Plan {
  name: string;
  price: number;
  description: string[];
  age: number;
}

interface User {
  name: string;
  lastName: string;
  birthDay: string;
}

const Planes: FC = () => {
  const setUser = useUserStore((state) => state.setUser);
  const [plans, setPlans] = useState<Array<Plan>>([]);
  const [loading, setLoading] = useState(false);
  const [quoteOptionSelected, setQuoteOptionSelected] = useState(false);
  const navigate = useNavigate();

  const userState = useUserStore((state) => state);

  async function fetchUser() {
    setLoading(true);
    try {
      const userData: User = await getUserData();
      setUser(userData.name, userData.lastName, userData.birthDay);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  async function fetchPlans() {
    const userAge = getUserAge(userState.birthDay);
    setLoading(true);
    try {
      const results = await getPlans();
      const validPlans = results.list.filter(
        (plan: Plan) => plan.age <= userAge,
      );
      setPlans(validPlans);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  function handlePlanSelected() {
    navigate("/resumen");
  }

  useEffect(() => {
    fetchUser();
  }, []);

  useEffect(() => {
    if (userState.name) {
      fetchPlans();
    }
  }, [userState]);

  return (
    <>
      {loading && <LoadingOverlay />}
      <Header />
      <main>
        <Steps current={1} total={2} />

        <div className="bg-[#FAFBFF] h-svh">
          <div className="py-8 max-w-[1155px] mx-auto">
            <div className="hidden mb-4 md:block max-w-[996px] mx-auto">
              <BackButton />
            </div>
            <div className="text-[#141938] pb-8 px-6 max-w-[544px] mx-auto md:text-center">
              <h2 className="font-bold text-[28px] md:text-[40px] leading-[36px] -tracking-[0.2px]">
                {userState.name || ""} ¿Para quién deseas cotizar?
              </h2>
              <p className="leading-7 -tracking-[0.1px] mt-2">
                Selecciona la opción que se ajuste más a tus necesidades.
              </p>
            </div>
            <div className="pb-8 px-6">
              <QuoteOptions onSelected={() => setQuoteOptionSelected(true)} />
            </div>
            {quoteOptionSelected && (
              <div>
                {plans.length > 0 && (
                  <div className="flex flex-row overflow-scroll space-x-8 pt-8 px-12 pb-9 mb-8 justify-center">
                    {plans.map((plan, i) => (
                      <PlanCard
                        key={i}
                        plan={plan}
                        isRecommended={i === 0}
                        onSelected={handlePlanSelected}
                      />
                    ))}
                  </div>
                )}
                <div className="md:hidden">
                  <Pagination current={1} total={plans.length || 0} />
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </>
  );
};

export default Planes;
