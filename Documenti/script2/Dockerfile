# Usa l'immagine di base di Nginx
FROM nginx:1.22

# Rimuovi i file di default di Nginx
RUN rm -rf /usr/share/nginx/html/*

# Copia i file del tuo progetto nella directory di default di Nginx
COPY . /usr/share/nginx/html

# Configura Nginx (opzionale se hai un file nginx.conf personalizzato)
# COPY nginx.conf /etc/nginx/nginx.conf

