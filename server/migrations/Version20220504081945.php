<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220504081945 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql("insert into Book (titulo, precio, isbn, genero, autor, image) values ('El Quijote',10, 123456,'Novela','Miguel De Cervantes','https://imagenes.elpais.com/resizer/dcylXF7I3Oej-dyg6rTSbI3G0Ps=/414x0/arc-anglerfish-eu-central-1-prod-prisa.s3.amazonaws.com/public/7BN7MROFVTFLCFQ2FXZPUC3Y3E.jpg')");
        $this->addSql("insert into Book (titulo, precio, isbn, genero, autor, image) values ('Codigo da Vinci',1299,12312312,'Ficción','Dan Brown','https://m.media-amazon.com/images/I/61grG7izq2L.jpg')");
        $this->addSql("insert into Book (titulo, precio, isbn, genero, autor, image) values ('La Suerte De Los Idiotas',1402,435353,'Novela','Roberto Martínez Guzmán','https://images-na.ssl-images-amazon.com/images/I/41M+wjWzlfL._SX331_BO1,204,203,200_.jpg')");
        $this->addSql("insert into Book (titulo, precio, isbn, genero, autor, image) values ('La Historia Secreta del Mundo',2199,234242,'Guía','Jonathan Black','https://m.media-amazon.com/images/I/51IwVLokIML.jpg')");
        $this->addSql("insert into Book (titulo, precio, isbn, genero, autor, image) values ('El Visitante',945,5677882,'Novela','Stephen King','https://images-na.ssl-images-amazon.com/images/I/A1Jw3hC5HPL.jpg')");
        $this->addSql("insert into Book (titulo, precio, isbn, genero, autor, image) values ('Steve Jobs',1045,975728,'Biografía','Walter Isaacson','https://m.media-amazon.com/images/I/41kbx7BGEKL.jpg')");

    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs

    }
}
