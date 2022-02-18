import { AppContainer, Title } from "./App.styled";
import Form from "./components/Form/Form";
import Filter from "./components/Filter/Filter";
import ContactsList from "./components/ContactsList/ContactsList";



export default function App () {
  
 
    return (
      <AppContainer>
        <Title>Phonebook</Title>
        <Form/>
        <Title> Contacts </Title>
        <Filter/>
        <ContactsList/>
      </AppContainer>
    );
}

