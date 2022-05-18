<?php

namespace App\Controller;

use App\Entity\Book;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class BookController extends AbstractController
{
    //public function __construct(ManagerRegistry $doctrine) {}

    /**
     * @Route("/book", name="create_book", methods="post")
     */
    public function createBook(Request $request):Response{

        $data = $request->getContent();
        $content = json_decode($data);
        $book_stdClass = $content;

        // syfony version < v5: $em = $this->getDoctrine()->getManager();
        $em = $this->getDoctrine()->getManager();

        $book = new Book();
        $book->setTitulo($book_stdClass->titulo);
        $book->setPrecio($book_stdClass->precio * 100);
        $book->setIsbn($book_stdClass->isbn);
        $book->setGenero($book_stdClass->genero);
        $book->setAutor($book_stdClass->autor);
        $book->setImage($book_stdClass->image);

        $em->persist($book);
        $em->flush();

        $result = [
            'titulo'=>$book->getTitulo(),
            'precio'=>$book->getPrecio(),
            'isbn'=>$book->getIsbn(),
            'genero'=>$book->getGenero(),
            'autor'=>$book->getAutor(),
            'image'=>$book->getImage()
        ];
        return $this->json([
            $result
        ]);
    }

    /**
     * @Route("/book", name="book")
     */
    public function index(): Response
    {
        $books = $this->getDoctrine()->getRepository(Book::class)->findAll();

        $data = [];

        foreach ($books as $book){
            $tmp =[
                "id" => $book->getId(),
                "titulo" =>  $book->getTitulo(),
                "precio" => $book->getPrecio() /100,
                "isbn" => $book->getIsbn(),
                "genero" => $book->getGenero(),
                "autor" => $book->getAutor(),
                "image" => $book->getImage()
            ];
            $data[] = $tmp;
        }

        return $this->json([
            'message' => 'Welcome to the library!',
            'books' => $data,
        ]);
    }

    /**
     * @Route("/book/{id}", name="book-id", methods="get", requirements={"id": "\d+"})
     */
    public function findById($id){

        $book = $this->getDoctrine()->getRepository(Book::class)->find($id);

        $data = [
            "id" => $book->getId(),
            "titulo" =>  $book->getTitulo(),
            "precio" => $book->getPrecio()/100,
            "isbn" => $book->getIsbn(),
            "genero" => $book->getGenero(),
            "autor" => $book->getAutor(),
            "image" => $book->getImage()
        ];

        return $this->json([
            $data
        ]);
    }

    /**
     * @Route("/book/{titulo}", name="product-titulo", methods="get")
     */
    public function findByTitle($titulo){

        $books = $this->getDoctrine()->getRepository(Book::class)->findBy([
            "titulo" => $titulo
        ]);

        $result =  [];
        foreach ($books as $book){
            $data = [
                "titulo" =>  $book->getTitulo(),
                "precio" => $book->getPrecio()/100,
                "isbn" => $book->getIsbn(),
                "genero" => $book->getGenero(),
                "autor" => $book->getAutor(),
                "image" => $book->getImage()
            ];
            $result[] =$data;
        }

        return $this->json([
            $result
        ]);
    }

    /**
     * @Route("/book/{id}", name="book-update", methods="put")
     */
    public function bookUpdate($id, Request $request){

        // syfony version < v5: $em = $this->getDoctrine()->getManager();
        $em = $this->getDoctrine()->getManager();

        $data = $request->getContent();
        $content = json_decode($data);
        $book_stdClass = $content;

        $book = $this->getDoctrine()->getRepository(Book::class)->find($id);

        $book->setTitulo($book_stdClass->titulo);
        $book->setPrecio($book_stdClass->precio*100);
        $book->setIsbn($book_stdClass->isbn);
        $book->setGenero($book_stdClass->genero);
        $book->setAutor($book_stdClass->autor);
        $book->setImage($book_stdClass->image);

        $em->flush();

        return $this->json([
            "message" => "Book update",
            $book_stdClass
        ]);
    }

    /**
     * @Route("/book/{id}", name="book-delete", methods="delete")
     */
    public function productDelete($id){

        $em = $this->getDoctrine()->getManager();
        $book = $this->getDoctrine()->getRepository(Book::class)->find($id);

        $em->remove($book);
        $em->flush();

        return $this->json([
            "message" =>"Book deleted"
        ]);
    }
}
