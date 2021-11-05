import {
    CategoryProvider,
    CategoryTitle,
    CategoryItem,
  } from '@mui-treasury/components/menu/category';
  import {
    SocialProvider,
    SocialLink,
  } from '@mui-treasury/components/socialLink';
  import { useBallSocialLinkStyles } from '@mui-treasury/styles/socialLink/ball';
  
  import { useNikiCategoryMenuStyles } from '@mui-treasury/styles/categoryMenu/niki';
  
  import Box from '@material-ui/core/Box';
  import Grid from '@material-ui/core/Grid';
  import styled from 'styled-components';
  import Typography from '@material-ui/core/Typography';
  
//   import { FontProvider, Font } from 'website/src/components/Font';

const FooterStyle = styled.footer`
        font-family: tahoma, sans-serif;
`;

  function Footer(props) {
    return (
      <FooterStyle>
        <Box width={'100%'} >
          <Box style={{background: '#D2D2CF'}} pt={6} pb={{ md: 6 }}>
            <Grid container spacing={4}>
              <Grid item xs={6} md={4} lg={3}>
                <Box
                  component={'img'}
                  mt={-3}
                  ml={6}
                  width={120}
                  src="/DinnerBellLogo.png"
                  alt=""
                />
                <Box  ml={4}>
                  <SocialProvider  useStyles={useBallSocialLinkStyles}>
                    <SocialLink brand={'Envelope'} />
                    <SocialLink brand={'Facebook'} />
                    <SocialLink brand={'Instagram'} />
                  </SocialProvider>
                </Box>
              </Grid>
              <Grid item xs={12} md={8} lg={5}>
                <Grid container spacing={2}>
                  <Grid item xs={6} sm={4}>
                    <CategoryProvider useStyles={useNikiCategoryMenuStyles}>
                      <CategoryTitle>
                        <h1>Menu</h1>
                      </CategoryTitle>
                      <CategoryItem>Menu Items</CategoryItem>
                    </CategoryProvider>
                  </Grid>
                  <Grid item xs={6} sm={4}>
                    <CategoryProvider useStyles={useNikiCategoryMenuStyles}>
                      <CategoryTitle>
                        <h1>Store</h1>
                      </CategoryTitle>
                      <CategoryItem>Store Details</CategoryItem>
                    </CategoryProvider>
                  </Grid>
                  <Grid item xs={6} sm={4}>
                    <CategoryProvider useStyles={useNikiCategoryMenuStyles}>
                      <CategoryTitle>
                        <h1>About</h1>
                      </CategoryTitle>
                      <CategoryItem>Our History</CategoryItem>
                    </CategoryProvider>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Box>
        </FooterStyle>
    );
  };

  export default Footer;