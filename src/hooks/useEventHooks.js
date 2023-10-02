import { useContractEvents } from "@thirdweb-dev/react";
export function useEventHooks(contract) {
  // Event hooks
  const { data: paymentStatusEvents } = useContractEvents(
    contract,
    "PaymentStatus",
    {
      queryFilter: {
        filters: {},
        fromBlock: 44871649,
        toBlock: "latest",
        order: "asc",
      },
      subscribe: true,
    },
  );
  
  const { data: roleGrantedEvents } = useContractEvents(
    contract,
    "RoleGranted",
    {
      queryFilter: {
        filters: {},
        fromBlock: 44871649,
        toBlock: "latest",
        order: "asc",
      },
      subscribe: true,
    },
  );
  
  const { data: enrolledEvents } = useContractEvents(
    contract,
    "StudentEnrolled",
    {
      queryFilter: {
        filters: {},
        fromBlock: 44871649,
        toBlock: "latest",
        order: "asc",
      },
      subscribe: true,
    },
  );
  
  const { data: roleRevokedEvents } = useContractEvents(
    contract,
    "RoleRevoked",
    {
      queryFilter: {
        filters: {},
        fromBlock: 44871649,
        toBlock: "latest",
        order: "asc",
      },
      subscribe: true,
    },
  );
  
  const { data: dropoutEvents } = useContractEvents(
    contract,
    "DropOut",
    {
      queryFilter: {
        filters: {},
        fromBlock: 44871649,
        toBlock: "latest",
        order: "asc",
      },
      subscribe: true,
    },
  );

  // Returning the hooks
  return {
    paymentStatusEvents,
    roleGrantedEvents,
    enrolledEvents,
    roleRevokedEvents,
    dropoutEvents,
  };
}
