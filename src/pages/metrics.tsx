import { Can } from "../components/Can";
import { setupApiClient } from "../services/api";
import { withSSRAuth } from "../utils/withSSRAuth";

export default function Metrics() {
  return (
    <>
      <h1>Métricas</h1>

      <Can permissions={["metrics.create"]}>
        <button type="button">Criar métrica</button>
      </Can>
    </>
  )
}

export const getServerSideProps = withSSRAuth(async (ctx) => {
  const apiClient = setupApiClient(ctx);

  await apiClient.get("/me");


  return {
    props: {}
  }
}, {
  permissions: ["metrics.list"],
  roles: ["administrator"]
});