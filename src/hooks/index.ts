import { useState, useEffect } from "react";
import { Plan, User } from "../models";

import { getUserAge } from "../utils/getUserAge";

import { getUserData } from "../services/userService";
import { getPlans } from "../services/planService";
import { useUserStore } from "../store";

export const useFetchPlans = (): [Plan[], boolean] => {
  const userState = useUserStore((state) => state);
  const userAge = getUserAge(userState.birthDay);
  const [plans, setPlans] = useState<Plan[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      if (userState.name) {
        setLoading(true);
        try {
          const results = await getPlans();
          const validPlans = results.list.filter(
            (plan: Plan) => plan.age <= userAge,
          );
          setPlans(validPlans);
        } catch (e: unknown) {
          console.error(e);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchData();
  }, [userState]);

  return [plans, loading];
};

export const useFetchUser = () => {
  const setUser = useUserStore((state) => state.setUser);
  const [isFetching, setIsFetching] = useState(false);
  useEffect(() => {
    const fetchUser = async () => {
      setIsFetching(true);
      try {
        const userData: User = await getUserData();
        setUser(userData.name, userData.lastName, userData.birthDay);
      } catch (error) {
        console.error(error);
      } finally {
        setIsFetching(false);
      }
    };

    fetchUser();
  }, []);

  return isFetching;
};
