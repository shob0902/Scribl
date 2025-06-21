

import { CreateOutlined as PencilIcon } from '@mui/icons-material'; 
import { Typography, Box, styled } from '@mui/material';

const Pencil = styled(PencilIcon)`
  font-size: 120px;
  color:rgb(158, 157, 157);
`

const Text = styled(Typography)`
    color: #80868b;
    font-size: 22px
`

const Container = styled(Box)`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20vh
`

const EmptyNotes = () => {
    return (
        <Container>
            <Pencil />
            <Text>Jot It. Sort It. Never Forget It</Text>
        </Container>
    )
}

export default EmptyNotes;