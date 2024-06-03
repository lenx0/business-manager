import { Grid, Typography } from "@mui/material";
import PriceCard from "./Card";

const Prices = () => {
  const priceCards = [
    {
      price: 49,
      title: "Licença básica, somente 1 usuário",
      features: [
        "Aplicativo para MAC",
        "1 ano de atualizações no app para MAC",
        "1 ano de armazenamento gratuito na nuvem",
      ],
    },
    {
      price: 99,
      title: "Licença premium, somente 1 usuário",
      features: [
        "Aplicativo para MAC",
        "1 ano de atualizações no app para MAC",
        "1 ano de armazenamento gratuito na nuvem",
        "Um espaço de trabalho pessoal na nuvem",
        "Todas as ferramentas, somente para você",
      ],
    },
    {
      price: 299,
      title: "Uma assinatura para toda a equipe",
      features: [
        "Acesso ao aplicativo para MAC para todos",
        "Espaço de trabalho compartilhado na nuvem",
        "Acesso gratuito à nuvem por tempo ilimitado",
        "Gerenciamento de equipe fácil",
        "Nenhuma chave de licença necessária",
      ],
    },
  ];

  return (
    <Grid container alignItems="center" justifyContent="space-between" spacing={4} textAlign="right">
      <Grid item xs={12} md={6}>
        <img src="../src/assets/images/illustration4.png" alt="Illustration" style={{ maxWidth: "100%", height: "auto", maxHeight: 400 }} />
      </Grid>
      <Grid item xs={12} md={6}>
        <Typography fontSize="60px">
          Selecione um nível de associação
          <Typography component="span" fontSize="60px">
            o preço certo para você.
          </Typography>
        </Typography>
        <Typography fontSize="18px">
          Preços listados em USD. Taxas não inclusas.
          Ao utilizar o programa, você concorda com nossos termos e políticas.
        </Typography>
      </Grid>
      <Grid container direction="row" justifyContent="space-between" spacing={4} mt={4}>
        {priceCards.map((card, index) => (
          <Grid item key={index} xs={12} md={4}>
            <PriceCard
              price={card.price}
              title={card.title}
              features={card.features}
            />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default Prices;
