import { useEffect, useRef, useState } from 'react'
import { Button, Card, Container } from 'react-bootstrap';
import { FaCamera, FaRegWindowClose } from 'react-icons/fa';
import './assets/Camera.css';
import ToastAlert from '../ToasAlert/ToastAlert';

interface CameraProps {
    setPhotoBase64 : (value: string) => void;
}

const Camera = ({ setPhotoBase64 } : CameraProps) => {
    // ***** References ***** //
    const videoDiv = useRef<HTMLVideoElement>(null);
    const photoDiv = useRef<HTMLCanvasElement>(null);

    // ***** States ***** //
    const [stream, setStream]         = useState<MediaStream | null>(null);
    const [isCameraOn, setIsCameraOn] = useState(false);

    // ***** Functions ***** //
    const startCamera = () => {
        navigator.mediaDevices
        .getUserMedia({
            video : { width : 300, height : 300 }
        })
        .then(stream => {
            setStream(stream);
            const video = videoDiv.current;
            if (video) {
                video.srcObject = stream;
                video.play();
            }
            setIsCameraOn(true);
        }).catch(err => {
            console.log(err)
        })
    }

    useEffect( () => {
        startCamera();
        checkCameraPermissions();

        return () => {
            if (stream) {
                stream.getTracks().forEach(track => track.stop());
            }
        }
    }, [])

    const getPhoto = () => {
        startCamera();

        const width  = 300;
        const height = 300;
        
        const video = videoDiv.current;
        const photo = photoDiv.current;

        if (video && photo) {
            photo.width  = width;
            photo.height = height;
    
            const context = photo.getContext('2d');
            context!.drawImage(video, 0, 0, width, height);

            // Save the photo as a base64 string
            const base64Image = photo.toDataURL("image/jpeg");
            setPhotoBase64(base64Image);

            // Stop the camera
            if (stream) {
                stream.getTracks().forEach(track => track.stop());
            }
        }
    }

    const closePhoto = () => {
        const f = photoDiv.current

        if (f) {
            const context = f.getContext('2d');
            context!.clearRect(0, 0, f.width,f.height);
        }
    }

    const checkCameraPermissions = async() => {
        try {
            const cameraPermissionStatus = await navigator.permissions.query({ name: 'camera' });

            // Verified
            if (cameraPermissionStatus.state !== 'granted'){
                <ToastAlert
                    title = 'Permisos denegados'
                    body = 'No cuentas con los permisos de la Camara, por favor activalos'
                />
            }
        } catch(error) {
            console.error(error);
        }
    }

    // ***** JSX ***** //
    return (
        <div className = 'd-flex justify-content-center'>
            <Container className = 'mb-5 row container align-items-center'>
                {/* <Row> */}
                    <Card className = 'col-sm-12 col-md-6 card'>
                        <video ref = { videoDiv } style = {{ maxWidth: '100%', maxHeight: '30rem', marginBottom : '0.5rem' }}></video>
                        <Card className = 'row gap-2'>
                            {/* <Button onClick={ startCamera }>
                                Encender cámara
                            </Button> */}
                            <Button onClick={ getPhoto }>
                                <FaCamera />Tomar foto
                            </Button>
                        </Card>
                    </Card>
                    <Card className = 'col-sm-12 col-md-6 card py-4'>
                        <canvas ref = { photoDiv }  style = {{ maxWidth: '100%', maxHeight: '30rem', marginBottom : '0.5rem' }}></canvas>
                        <Card className = 'bg-danger'>
                            <Button color='red' onClick={ closePhoto }>
                                <FaRegWindowClose /> Cerrar
                            </Button>
                        </Card>
                    </Card>
                {/* </Row> */}
            </Container>
        </div>
    );
}

export default Camera;