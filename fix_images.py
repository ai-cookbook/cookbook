import os
import subprocess
from pathlib import Path

# Путь к исполняемому файлу ImageMagick
MAGICK_PATH = r'C:\Program Files\ImageMagick-7.1.1-Q16-HDRI\magick.exe'

def resize_image(input_path, output_path, min_width=640):
    """
    Изменяет размер изображения с сохранением соотношения сторон 2:1 и минимальной шириной 640px
    """
    try:
        # Создаем директорию для исправленных изображений, если её нет
        Path(output_path).parent.mkdir(parents=True, exist_ok=True)
        
        # Команда для изменения размера и обрезки изображения
        command = [
            MAGICK_PATH,
            input_path,
            '-resize', f'{min_width}x^',  # минимальная ширина 640px
            '-gravity', 'center',
            '-extent', f'{min_width}x{min_width//2}',  # соотношение 2:1
            output_path
        ]
        
        # Запускаем команду
        subprocess.run(command, check=True)
        print(f"✅ Успешно обработано: {input_path}")
        return True
    except subprocess.CalledProcessError as e:
        print(f"❌ Ошибка при обработке {input_path}: {str(e)}")
        return False
    except Exception as e:
        print(f"❌ Неожиданная ошибка при обработке {input_path}: {str(e)}")
        return False

def process_images():
    # Пути к директориям
    showcase_dir = 'src/data/showcase'
    output_dir = 'src/data/showcase_fixed'
    
    # Создаем директорию для исправленных изображений
    os.makedirs(output_dir, exist_ok=True)
    
    # Список изображений для обработки
    problem_images = [
        'yandexgpt-chatbot.jpg',
        'hr-bot-onboarding.jpg',
        'hr-bot-vacancy.jpg',
        'mosru-bot.jpg',
        'yandexgpt-rag.jpg',
        'yandexgpt-summarizer.jpg',
        'yandexgpt-tokenizer.jpg'
    ]
    
    # Обрабатываем каждое изображение
    for image_name in problem_images:
        input_path = os.path.join(showcase_dir, image_name)
        output_path = os.path.join(output_dir, image_name)
        
        if os.path.exists(input_path):
            print(f"\nОбработка {image_name}...")
            resize_image(input_path, output_path)
        else:
            print(f"\n❌ Файл не найден: {input_path}")

if __name__ == '__main__':
    if not os.path.exists(MAGICK_PATH):
        print(f"❌ ImageMagick не найден по пути: {MAGICK_PATH}")
        print("Пожалуйста, проверьте путь к установленному ImageMagick")
        exit(1)
        
    print("Начинаем исправление изображений...")
    process_images() 