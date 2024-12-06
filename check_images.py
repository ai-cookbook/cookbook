from PIL import Image
import os

def check_image_dimensions(image_path):
    try:
        with Image.open(image_path) as img:
            width, height = img.size
            aspect_ratio = width / height
            return {
                'path': image_path,
                'width': width,
                'height': height,
                'aspect_ratio': aspect_ratio,
                'meets_requirements': width >= 640 and aspect_ratio <= 2
            }
    except Exception as e:
        return {
            'path': image_path,
            'error': str(e)
        }

# Путь к директории с изображениями
showcase_dir = 'src/data/showcase'

print("Проверяем изображения после замены:")
print("-" * 50)

# Проверяем все изображения
for filename in os.listdir(showcase_dir):
    if filename.lower().endswith(('.png', '.jpg', '.jpeg')):
        image_path = os.path.join(showcase_dir, filename)
        result = check_image_dimensions(image_path)
        
        if 'error' in result:
            print(f"\n❌ Ошибка при проверке {filename}:")
            print(f"   {result['error']}")
        else:
            status = '✅' if result['meets_requirements'] else '❌'
            print(f"\n{status} {filename}:")
            print(f"   Ширина: {result['width']}px")
            print(f"   Высота: {result['height']}px")
            print(f"   Соотношение сторон: {result['aspect_ratio']:.2f}")
            if not result['meets_requirements']:
                if result['width'] < 640:
                    print(f"   ⚠️ Ширина меньше требуемой (640px)")
                if result['aspect_ratio'] > 2:
                    print(f"   ⚠️ Соотношение сторон больше требуемого (2:1)") 