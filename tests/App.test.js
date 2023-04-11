import { fireEvent, render,screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../../App';
import AppRouter from '../AppRouter';
import CatalogCHimikals from '../CatalogCHimical';
import Modal from '../modal/Modal';
import Home from '../pages/Home'
import Order from '../pages/Order';

test('render learn react link1',()=>{
    render(<App />);
    const HelloWorldElem=screen.getByText(/Hello World/i);
    expect(HelloWorldElem).toBeInTheDocument();
}); 

test('render learn react link2',()=>{
 render(<Home />);
 const btn=screen.getAllByRole('button');
 expect(btn).toBeDisabled();
});

test('render learn react link3',async()=>{
    render(<Modal />);
    const btn= await screen.findByRole('img');
    expect(btn).toBeInTheDocument();
});

test('render learn react link4',()=>{
    render(<Modal />);
    const btn=screen.toBeInTheDocument('img');
    expect(btn).toHaveStyle({position:'fixed'});
});

test('render learn react link5',()=>{
    render(<Order />);
    const btn=screen.getByTestId('navigation');
    const modal=screan.queryByTestId('modal active');
    fireEvent.click(btn);
    expect(modal).toBeTruthy();
});

test('render learn react link6',()=>{
    render(<Order />);
    const btn=screen.getByRole('input');
    fireEvent.input(btn,{target:{value:'123123'}});
    expect(screen.queryByRole('input')).toContainHTML('123123');
});

test('render learn react link7',()=>{
    render(<AppRouter />);
    const mainLink=screen.getByTestId('/Shop');
    userEvent.click(aboutLink);
    expect(screen.getByTestId('/Shop')).toBeInTheDocument();
});

test('render learn react link8',()=>{
    render(<AppRouter />);
    const orderLink=screen.getByTestId('/Order');
    userEvent.click(aboutLink);
    expect(screen.getByTestId('/Order')).toBeInTheDocument();
})

test('render learn react link9',()=>{
   render(<CatalogCHimikals />);
   const btn=screen.getAllByTestId('shop-products');
   expect(btn).toBeInTheDocument();
});