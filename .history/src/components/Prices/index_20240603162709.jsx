import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
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
    <Grid
      container
      alignItems="center"
      justifyContent="space-between"
      textAlign="right"
    >
      <Grid item>
        <img src="../src/assets/images/illustration4.png" alt="Illustration" />
      </Grid>
      <Grid item>
        <Typography fontSize="60px">
          Selecione um nível de associação
          <br />o preço certo para você.
        </Typography>
        <Typography>
          Preços listados em USD. Taxas não inclusas.
          <br />
          Ao utilizar o programa, você concorda com nossos termos e políticas.
        </Typography>
      </Grid>
      <Grid container direction="row" justifyContent="center" gap={5}>
        {priceCards.map((card, index) => (
          <PriceCard
            key={index}
            price={card.price}
            title={card.title}
            features={card.features}
          />
        ))}
      </Grid>
    </Grid>
  );
};

export default Prices;
