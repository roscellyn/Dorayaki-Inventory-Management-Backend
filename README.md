<h1 align="center">
  <br>
  Seleksi Tim Laboratorium Programming 2019 Tahap II
  <br>
  <br>
</h1>

<h2 align="center">
  <br>
  Stand with Dorayaki (Backend)
  <br>
  <br>
</h2>

## Deskripsi Program

Program dapat melakukan proses CRUD dari 2 jenis objek yaitu Dorayaki dan Toko Dorayaki dengan menggunakan REST API.  

## Spesifikasi Program

Program menggunakan bahasa pemrograman Javascript dengan modul cors, dotenv, express, mongoose dan Database MongoDB. Program kemudian di-dockerize menggunakan Docker.

## How to Use

1. Clone repositori ini
2. Pastikan Docker sudah ter-install dengan baik pada laptop/PC
3. Jalankan kode di bawah ini dalam direktori `backend` untuk membuat image dengan nama "dorayaki"
```
docker build -t "dorayaki" .
```
3. Kemudian jalankan program dengan kode di bawah ini
```
docker-compose up
```

## JSON Structure

### Collection: stores

```
{
   "nama": string,
   "jalan: string,
   "kecamatan": string,
   "provinsi": string,
   "noTelp": string,
   "stok": [
              "variantId": objectId,
              "jumlah": integer
           ]
}
```

### Collection: dorayakis

```
{
   "rasa": string,
   "deskripsi": string,
   "gambar": string,
}
```

## References

- https://www.youtube.com/watch?v=mrHNSanmqQ4&ab_channel=freeCodeCamp.org
- https://www.youtube.com/watch?v=7CqJlxBYj-M&ab_channel=freeCodeCamp.org
- https://docs.docker.com/docker-for-windows/install/#system-requirements-for-wsl-2-backend
- https://www.youtube.com/watch?v=gAkwW2tuIqE
- https://www.youtube.com/watch?v=0B2raYYH2fE

## Author

Jacelyn Felisha <br />
18219097 <br />
Sistem dan Teknologi Informasi ITB 2019
