import { useRouter, useSearchParams } from "next/navigation";

type CustomerType = "Common" | "Vip";

const customerTypeToId: Record<CustomerType, string> = {
  Common: "cust_001",
  Vip: "cust_002",
};

export const useCustomer = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const customerType: CustomerType =
    searchParams.get("customer") === "Vip" ? "Vip" : "Common";

  const switchCustomer = (customerType: CustomerType) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("customer", customerType);
    router.push(`${window.location.pathname}?${params.toString()}`);
  };

  return {
    customerType,
    customerId: customerTypeToId[customerType],
    switchCustomer,
  };
};
