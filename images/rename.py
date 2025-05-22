import os
from PIL import Image
import pillow_heif

# Habilita suporte a HEIC
pillow_heif.register_heif_opener()

# Caminho da pasta onde estão as imagens
pasta = "./"  # altere conforme o seu caso

# Lista e ordena arquivos
arquivos = sorted(os.listdir(pasta))

contador = 1

for arquivo in arquivos:
    caminho_completo = os.path.join(pasta, arquivo)

    # Pula diretórios
    if not os.path.isfile(caminho_completo):
        continue

    # Define novo nome
    novo_nome = f"giromin-{contador}.jpg"
    novo_caminho = os.path.join(pasta, novo_nome)

    # Converte se não for jpg
    ext = os.path.splitext(arquivo)[1].lower()

    if ext not in ['.jpg', '.jpeg']:
        # Abre a imagem
        try:
            imagem = Image.open(caminho_completo).convert("RGB")
            # Salva como jpg com novo nome
            imagem.save(novo_caminho, "JPEG")
            print(f"Convertido e renomeado: {arquivo} -> {novo_nome}")
        except Exception as e:
            print(f"Erro ao processar {arquivo}: {e}")
    else:
        # Apenas renomeia
        os.rename(caminho_completo, novo_caminho)
        print(f"Renomeado: {arquivo} -> {novo_nome}")

    contador += 1
