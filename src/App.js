import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Counter from './Counter';
import UserCard from './UserCard';
import ChangeText from './ChangeText';
import Button from './Button';
import { useState } from "react";
import ToDoList from './ToDoList';
import ChangeTitle from './ChangeTitle';
import TextComp from './TextComp';
import InputForma from './InputForma';
import ChangeColor from './ChangeColor';
import ToggleComponent from './ToggleComponent';
import Counter2 from './Counter2';
import AddElement from './AddElement';
import Focus from './Focus';
import ChangeCircleText from './ChangeCircleText';
import VklVikl from './VklVikl';
import SummaIzFormi from './SummaIzFormi';
import MassivChisel from './MassivChisel';
import MassivStrok from './MassivStrok';
import CardNameAge from './CardNameAge';
import FilterChisel from './FilterChisel';
import MassivNoviiElement from './MassivNoviiElement';
import ToDoListNew from './ToDoListNew';
import Sortirovka from './Sortirovka';
import Tablica from './Tablica';
import ChangeColorMassiv from './ChangeColorMassiv';
import ImageMassiv from './ImageMassiv';
import SelectMassiv from './SelectMassiv';

function App() {
  const [show, setShow]=useState(false);
  return (
    <div className="App">
      <Header />
      <p>Это ваше первое React-приложение.</p>
      {show ? <Counter /> : <></>}
      <button onClick={()=>setShow(!show)}>Нажми</button>
      <UserCard name="Саша" age="21" />
      <ChangeText />
      <Button buttontext="Нажми" />
      <ToDoList />
      <ChangeTitle />
      <TextComp/>
      <InputForma />
      <ChangeColor />
      <ToggleComponent />
      <Counter2 />
      <AddElement />
      <Focus />
      <ChangeCircleText />
      <VklVikl />
      <SummaIzFormi />
      <h2>Лабораторная работа №8.</h2>
      <p>1. Создайте список из массива чисел и отобразите их на странице.</p>
      <MassivChisel />
      <p>2. Реализуйте компонент, который принимает массив строк и отображает его как маркированный список.</p>
      <MassivStrok />
      <p>3. Создайте компонент, который принимает массив объектов с полями name и age и отображает их в виде карточек.</p>
      <CardNameAge />
      <p>4. Реализуйте компонент, который фильтрует массив чисел и отображает только чётные числа.</p>
      <FilterChisel />
      <p>5. Сделайте компонент, который принимает массив и позволяет добавлять новый элемент в список по нажатию на кнопку.</p>
      <MassivNoviiElement />
      <p>6. Создайте список задач (todo-list), в котором можно добавлять и удалять задачи.</p>
      <ToDoListNew />
      <p>7. Реализуйте компонент, который сортирует массив строк по алфавиту и отображает результат.</p>
      <Sortirovka />
      <p>Источник, но я исправляла там всё вообще: https://www.delftstack.com/howto/react/react-sort-array/</p>
      <p>8. Создайте таблицу, в которой отображается список товаров с колонками 'Название' и 'Цена'.</p>
      <Tablica />
      <p>9. Реализуйте компонент, который отображает список элементов, и при наведении на элемент его цвет меняется.</p>
      <ChangeColorMassiv />
      <p>10. Создайте список изображений, которые загружаются из массива объектов с URL-адресами и отображайте их в сетке.</p>
      <ImageMassiv />
      <h3>Индивидуальное задание</h3>
      <p>5. Сделайте компонент, который принимает массив и отображает элементы в виде выпадающего списка (select).</p>
      <SelectMassiv />
      <Footer />

    </div>
  );
}

export default App;
